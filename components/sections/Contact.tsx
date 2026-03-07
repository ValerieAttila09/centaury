"use client";

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LOCATIONS = [
  {
    name: 'Gedung Candra Naya',
    address: 'Jl. Contoh No. 123, Jakarta',
    phone: '+62 123 456 789',
    email: 'info@contoh.com',
    lat: -6.147484,
    lng: 106.815207,
  },
  {
    name: 'Museum Macan',
    address: 'Jl. Contoh No. 123, Jakarta',
    phone: '+62 123 456 789',
    email: 'info@contoh.com',
    lat: -6.191210,
    lng: 106.767956,
  },
  {
    name: 'Museum Sejarah Jakarta',
    address: 'Jl. Contoh No. 123, Jakarta',
    phone: '+62 123 456 789',
    email: 'info@contoh.com',
    lat: -6.142486,
    lng: 106.815432,
  },
];

const ContactSection = () => {
  const [selected, setSelected] = useState(0);
  const position: [number, number] = [LOCATIONS[selected].lat, LOCATIONS[selected].lng];

  return (
    <section className="py-16 px-2 md:px-6 lg:px-0 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 tracking-tight">Our Locations</h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Visit one of our offices or send us a message. We have locations across the country to better serve you.</p>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/3 lg:w-1/3 flex-shrink-0">
            <div className="rounded-none flex flex-col gap-1 md:gap-2">
              {LOCATIONS.map((loc, idx) => (
                <button
                  key={loc.name}
                  className={`text-left rounded-none p-4 transition-all font-medium text-sm md:text-base ${selected === idx ? 'bg-black text-white shadow' : 'hover:bg-neutral-200 text-black'}`}
                  onClick={() => setSelected(idx)}
                >
                  <span className="block font-semibold">{loc.name}</span>
                  <span className={`block text-xs md:text-sm ${selected === idx ? "text-neutral-300" : "text-neutral-600"}`}>{loc.address}</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1 flex flex-col gap-6">
            <div className="rounded-none overflow-hidden border border-neutral-200 shadow-sm">
              <MapContainer center={position} zoom={15} style={{ height: '280px', width: '100%' }} scrollWheelZoom={false}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    {LOCATIONS[selected].name}<br />{LOCATIONS[selected].address}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="w-full rounded-none border border-neutral-200 bg-white shadow-sm p-6 flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-1">{LOCATIONS[selected].name}</h3>
              <p className="text-sm text-neutral-700">{LOCATIONS[selected].address}</p>
              <p className="text-sm text-neutral-700">{LOCATIONS[selected].phone}</p>
              <p className="text-sm text-neutral-700">{LOCATIONS[selected].email}</p>
            </div>

            <form className="w-full rounded-none border border-neutral-200 bg-white shadow-sm p-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
                  <input type="text" required className="w-full border border-neutral-300 rounded-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your name" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full border border-neutral-300 rounded-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message <span className="text-red-500">*</span></label>
                <textarea required className="w-full border border-neutral-300 rounded-none px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-black" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="mt-2 bg-black text-white rounded-none px-6 py-2 font-semibold hover:bg-neutral-800 transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
