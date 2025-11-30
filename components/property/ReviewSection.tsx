import React, { useMemo, useState } from "react";
import { Review } from "../../interfaces";

const PAGE_SIZE = 3;

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => Math.ceil(reviews.length / PAGE_SIZE), [reviews.length]);

  const visible = reviews.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>

      {visible.map((review, idx) => (
        <div key={idx} className="border-b pb-4 mb-4">
          <div className="flex items-start gap-4">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="flex items-center gap-3">
                <p className="font-semibold">{review.name}</p>
                <p className="text-yellow-500">★ {review.rating}</p>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between">
        <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="px-3 py-1 rounded bg-gray-100">
          Previous
        </button>
        <div className="text-sm text-gray-600">
          Page {page + 1} of {pages}
        </div>
        <button onClick={() => setPage((p) => Math.min(p + 1, pages - 1))} disabled={page >= pages - 1} className="px-3 py-1 rounded bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
