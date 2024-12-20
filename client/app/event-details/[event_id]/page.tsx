'use client'

import BottomNavbar from "@/app/ui/bottomnavbar";
import { useState, useEffect, useContext } from "react";
import { User, Event, Rsvp } from "../../../../server/lib/definitions";
import { useParams } from "next/navigation";

import { EventImage } from "../../../components/event-image";
import { AboutEvent } from "../../../components/about-event";
import { Organizer } from "../../../components/organizer";
import { Attendees } from "../../../components/attendees";
import { AuthContext } from "@/app/authContext";
import axios from "axios";
import LoadingSpinner from "@/app/ui/loadingSpinner";

export default function EventDetails() {
  const params = useParams();
  const { isAuthenticated, userId } = useContext(AuthContext)
  const [events, setEvents] = useState<Event[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [rsvps, setRsvps] = useState<Rsvp[]>([])
  const [fetchTime, setFetchTime] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsResponse, usersResponse, rsvpsResponse] = await Promise.all([
          axios.get('http://localhost:8080/api/events'),
          axios.get('http://localhost:8080/api/users'),
          axios.get('http://localhost:8080/api/rsvps'),
        ])

        setEvents(eventsResponse.data.events)
        setUsers(usersResponse.data.users)
        setRsvps(rsvpsResponse.data.rsvps)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setFetchTime(false)
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchTime])

  const event = events?.find(
    (event) => event.event_id === Number(params.event_id)
  );
  const organizer = users?.find((user) => user.user_id === event?.organizer);
  const eventRSVPs = rsvps?.filter((rsvp) => rsvp.event_id === event?.event_id);
  const attendees = (eventRSVPs || [])
    .map((rsvp) => users?.find((user) => user.user_id === rsvp.user_id))
    .filter(Boolean);
  const isAttending = (attendees.find((user) => user?.user_id === userId)) ? true : false;

  const startDate = event?.start_time ? new Date(event.start_time) : null;
  const endDate = event?.end_time ? new Date(event.end_time) : null;

  const startDateString = startDate 
    ? startDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : '';

  const endDateString = 
    startDate && endDate
      ? (startDate.getDay() !== endDate.getDay()
          ? endDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            })
          : endDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
            }))
      : '';

  if (loading) {
    return <LoadingSpinner />
  }

  if (!event) return (
    <div className="flex flex-col items-center p-5 gap-5">
      <div className="w-full mt-5 col-span-full text-center py-5 bg-white shadow-lg rounded-lg" style={{ maxWidth: "76rem" }}>
        <h2 className="text-2xl font-semibold text-gray-800">Event Not Found</h2>
        <p className="text-gray-600">Check back later for more events in your area.</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex justify-center bg-gray pb-20 h-auto">
        <div
          className="flex flex-col px-5 gap-5 py-5 w-full"
          style={{ maxWidth: "76rem" }}
        >
          <EventImage event={event} />
          <div className="grid gap-5 md:grid-cols-[3fr_2fr] xl:grid-cols-[4fr_2fr]">
            <div className="flex flex-col gap-5">
              <AboutEvent 
                event={event} 
                startDateString={startDateString} 
                endDateString={endDateString} 
              />
              <Organizer organizer={organizer} />
            </div>
            <Attendees event={event} attendees={attendees} />
          </div>
        </div>
      </div>
      <div>
        <BottomNavbar 
          organizer={organizer} 
          isAttending={isAttending}
          currentEvent={event}
          setFetchTime={setFetchTime}
        />
      </div>
    </div>
  );
}