"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Event, Category } from "../../../server/lib/definitions";
import { AuthContext } from "../authContext";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import EditModal from "@/components/edit-event-modal";
import CreateModal from "@/components/create-event-modal";
import DeleteModal from "@/components/delete-event-modal";
import axios from "axios";
import LoadingSpinner from "../ui/loadingSpinner";

export default function MyEvents() {
  const [users, setUsers] = useState<User[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [fetchTime, setFetchTime] = useState(false);
  const [loading, setLoading] = useState(true);

  const { isAuthenticated, userId } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEventParams = new URLSearchParams({
          userID: userId?.toString() || "",
        }).toString();

        const [eventsResponse, usersResponse] = await Promise.all([
          axios.get(
            `http://localhost:8080/api/events/search?${userEventParams}`
          ),
          axios.get("http://localhost:8080/api/users"),
        ]);

        const currentDate = new Date();
        const activeEvents = eventsResponse.data.events.filter(
          (event: any) => new Date(event.closed_at) >= currentDate
        );

        setEvents(activeEvents);
        setUsers(usersResponse.data.users);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setFetchTime(false);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchTime]);

  const myEvents = events.filter((event) => event.organizer === userId);

  const handleCreate = (e: any) => {
    e.preventDefault();
    setCreateModalOpen(true);
  };

  const handleEdit = (e: any, event: any) => {
    e.preventDefault();
    setCurrentEvent(event);
    setEditModalOpen(true);
  };

  const handleDelete = (e: any, event: any) => {
    e.preventDefault();
    setCurrentEvent(event);
    setDeleteModalOpen(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex bg-gray-100 justify-center min-h-screen">
      <div className="px-5 py-5 space-y-2 w-full" style={{ maxWidth: "76rem" }}>
        <div className="border bg-white shadow-lg px-5 py-4 rounded-lg">
          {isAuthenticated ? (
            <div className="space-y-2 w-full" style={{ maxWidth: "76rem" }}>
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold">Create Events</h3>
                <FaRegSquarePlus
                  size={30}
                  onClick={(e) => handleCreate(e)}
                  className="cursor-pointer"
                >
                  Create
                </FaRegSquarePlus>
              </div>
              {Array.isArray(events) && events.length > 0 ? (
                myEvents.map((event) => {
                  const host = users?.find(
                    (user) => user.user_id === event?.organizer
                  );

                  return (
                    <Link
                      href={`/event-details/${event.event_id}`}
                      key={event.event_id}
                      className="flex flex-col border sm:flex-row gap-2 bg-white p-2 shadow-lg rounded-lg overflow-hidden"
                    >
                      <Image
                        src="/main-events.png"
                        alt="event with many balloons"
                        width={250}
                        height={250}
                        className="w-[200px] h-full object-cover rounded-lg"
                      />
                      <div className="px-2">
                        <p className="text-gray-700 font-light">
                          {event.start_time
                            ? new Date(event.start_time).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )
                            : "No date available"}
                        </p>
                        <h3 className="font-bold">{event.title}</h3>
                        <p className="text-gray-600">
                          Hosted by: {host?.first_name} {host?.last_name}
                        </p>
                        <p className="text-blue-700">
                          {event.attendee_count} going
                        </p>
                      </div>

                      <div className="flex ml-auto gap-2">
                        <MdOutlineModeEdit
                          onClick={(e) => handleEdit(e, event)}
                          size={25}
                          className="ml-auto cursor-pointer m-2"
                        />
                        <MdDeleteOutline
                          onClick={(e) => handleDelete(e, event)}
                          size={25}
                          className="ml-auto cursor-pointer m-2"
                        />
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-5 bg-white shadow-lg rounded-lg">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    No events available
                  </h2>
                  <p className="text-gray-600">
                    Check back later for more events in your area.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <h1>Sign In first</h1>
          )}

          {editModalOpen && (
            <EditModal
              setEditModalOpen={setEditModalOpen}
              currentEvent={currentEvent}
              setFetchTime={setFetchTime}
            />
          )}

          {createModalOpen && (
            <CreateModal
              setCreateModalOpen={setCreateModalOpen}
              setFetchTime={setFetchTime}
            />
          )}

          {deleteModalOpen && (
            <DeleteModal
              setDeleteModalOpen={setDeleteModalOpen}
              currentEvent={currentEvent}
              setFetchTime={setFetchTime}
            />
          )}
        </div>
      </div>
    </div>
  );
}
