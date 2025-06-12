'use client';

import Image from 'next/image';

const ArticleCard = ({
  title,
  date,
  content,
  url,
  imageUrl,
}: {
  title: string;
  date: string;
  content: string;
  url: string | undefined;
  imageUrl: string | undefined;
}) => {
  const fullUrl =
    url && (url.startsWith('http') || url.startsWith('https')) ? url : undefined;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Menambahkan gambar jika ada */}
      {imageUrl && (
        <div className="w-full h-48 relative mb-4 rounded-t-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
            priority
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800">
        {fullUrl ? (
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
      </h3>
      <p className="text-gray-600 text-sm">{date}</p>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default ArticleCard;
