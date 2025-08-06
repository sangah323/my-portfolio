import React from "react";

interface VideoModalProps {
  videoUrl: string;
  title?: string;
  onClose: () => void;
}

export default function VideoModal({
  videoUrl,
  title,
  onClose,
}: VideoModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-xl"
          src={videoUrl}
          title={title || "시연 영상"}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
