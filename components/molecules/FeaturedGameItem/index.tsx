import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedGameItemProps {
  thumbnail: '1' | '2' | '3' | '4' | '5';
  href: string;
  title: string;
  device: string;
}

export default function Index(props: FeaturedGameItemProps) {
  const { thumbnail, href, title, device } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href={href}>
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`/img/Thumbnail-${thumbnail}.png`}
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
