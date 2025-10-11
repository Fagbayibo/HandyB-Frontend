import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

const sampleBookings = [
	{
		id: "b1",
		title: "Hourly Plumbing Service",
		price: 120,
		status: "active", // active | pending | completed
		icon: "🔧",
	},
	{
		id: "b2",
		title: "Bathroom Installations/Repairs",
		price: 95,
		status: "active",
		icon: "🚿",
	},
	{
		id: "b3",
		title: "Light Bulbs and Switch Replacements",
		price: 40,
		status: "completed",
		icon: "💡",
	},
	{
		id: "b4",
		title: "AC Service & Maintenance",
		price: 150,
		status: "pending",
		icon: "❄️",
	},
];

const statusLabel = {
	active: { text: "Active", color: "bg-green-50 text-green-600" },
	pending: { text: "Pending", color: "bg-yellow-50 text-yellow-700" },
	completed: { text: "Completed", color: "bg-gray-100 text-gray-700" },
};

const Tabs = ["active", "pending", "completed", "all"];

const Bookings = () => {
	const navigate = useNavigate();

	// Replace `sampleBookings` with [] to test "no bookings" state
	const [bookings] = useState(sampleBookings);
	const [tab, setTab] = useState("active");

	const filtered = useMemo(() => {
		if (tab === "all") return bookings;
		return bookings.filter((b) => b.status === tab);
	}, [bookings, tab]);

	// counts
	const counts = useMemo(() => {
		return {
			active: bookings.filter((b) => b.status === "active").length,
			pending: bookings.filter((b) => b.status === "pending").length,
			completed: bookings.filter((b) => b.status === "completed").length,
			total: bookings.length,
		};
	}, [bookings]);

	// empty state
	if (!bookings || bookings.length === 0) {
		return (
			<div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
				<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 text-indigo-600 mb-6">
					<IoCalendarOutline size={32} />
				</div>
				<h2 className="text-xl font-semibold mb-2 font-poppins">No bookings yet</h2>
				<p className="text-gray-500 mb-6 text-center font-poppins">
					View and manage your bookings
				</p>
				<button
					onClick={() => navigate("/dashboard/services")}
					className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-poppins font-semibold rounded-md shadow-sm hover:opacity-95 transition"
					aria-label="Browse Services"
				>
					<BiPlus className="text-white" />
					Browse Services
				</button>
			</div>
		);
	}

	return (
		<div className="p-4 sm:p-6">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
				<div>
					<h1 className="text-2xl font-semibold">My Bookings</h1>
					<p className="text-sm text-gray-500">
						View and manage your bookings
					</p>
				</div>

				<div className="flex items-center gap-3">
					<div className="hidden sm:flex items-center gap-2 bg-white rounded-full px-1 py-1 shadow-sm">
						{Tabs.map((t) => (
							<button
								key={t}
								onClick={() => setTab(t)}
								className={`px-3 py-1 rounded-full text-sm font-semibold font-poppins transition ${
									tab === t
										? "bg-blue-600 text-white"
										: "text-gray-700 hover:bg-gray-50"
								}`}
							>
								{t === "all"
									? `All (${counts.total})`
									: `${t[0].toUpperCase() + t.slice(1)} (${
											counts[t] || 0
									  })`}
							</button>
						))}
					</div>

					<button
						onClick={() => alert("Open filter UI")}
						className="inline-flex items-center gap-2 bg-white border rounded-lg px-3 py-2 text-sm shadow-sm hover:shadow-md"
						aria-label="Filter Bookings"
					>
						<FiFilter />
						<span className="hidden sm:inline">Filter Bookings</span>
					</button>

					<button
						onClick={() => navigate("/dashboard/services")}
						className="inline-flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg text-sm shadow-sm hover:opacity-95"
						aria-label="Book a Service"
					>
						<BiPlus />
						<span className="hidden sm:inline">Book a Service</span>
					</button>
				</div>
			</div>

			<div className="mb-3 text-sm text-gray-600">
				Result: {filtered.length} booking
				{filtered.length !== 1 ? "s" : ""}
			</div>

			<div className="space-y-3">
				{filtered.map((b) => (
					<div
						key={b.id}
						className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm"
					>
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-xl">
								<span aria-hidden>{b.icon}</span>
							</div>

							<div>
								<div className="flex items-center gap-3">
									<h3 className="font-semibold text-gray-800">
										{b.title}
									</h3>
									<span
										className={`text-xs font-medium px-2 py-1 rounded-full ${statusLabel[b.status].color}`}
									>
										{statusLabel[b.status].text}
									</span>
								</div>
								<p className="text-sm text-gray-500 mt-1">
									Service ID: {b.id}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="text-lg font-semibold">${b.price}</div>
							<div className="flex gap-2">
								<button
									onClick={() =>
										navigate(`/dashboard/booking/${b.id}`, {
											state: { service: null },
										})
									}
									className="text-sm text-blue-600 underline"
								>
									View
								</button>
								<button
									onClick={() =>
										alert("Open cancel/modify flow")
									}
									className="text-sm text-red-500"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Bookings;
