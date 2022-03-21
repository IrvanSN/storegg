import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedGameItemProps {
  thumbnail: string;
  href: string;
  title: string;
  device: string;
}

export default function featuredGameItem(props: FeaturedGameItemProps) {
  const { thumbnail, href, title, device } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${href}`}>
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={thumbnail}
              width="205"
              height="270"
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/game.svg"
                  alt="game-icon"
                  width={54}
                  height={36}
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{device}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
