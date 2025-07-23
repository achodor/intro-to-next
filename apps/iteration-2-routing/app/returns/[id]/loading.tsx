export default function Loading() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
					<div className="h-4 bg-gray-200 rounded w-32 mt-2 animate-pulse"></div>
				</div>
				<div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
			</div>

			<div className="bg-white shadow overflow-hidden sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
					<div className="h-4 bg-gray-200 rounded w-64 mt-1 animate-pulse"></div>
				</div>
				<div className="border-t border-gray-200">
					{[...Array(8)].map((_, i) => (
						<div
							key={i}
							className={`${
								i % 2 === 0 ? "bg-gray-50" : "bg-white"
							} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
						>
							<div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
