"use client"

import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    list: Banner[];
}
let bannerTimer: NodeJS.Timeout
let bannerTime = 3000;

export const Banners = ({ list }: Props) => {
    const [currentImage, setCurrentImage] = useState(1);

    /* Função para trocar imagem do banner automaticamente */
    const nextImage = () => {
        /* Garantir que currentImage esteja atualizado */
        setCurrentImage(currentImage => {
            if (currentImage + 1 >= list.length) {
                return 0;
            } else {
                return currentImage + 1;
            }
        })
    }

    /* Roda quando o componente é criado, se o componente sair da tela o timer é parado */
    useEffect(() => {
        bannerTimer = setInterval(nextImage, bannerTime);
        return () => clearInterval(bannerTimer);
    }, [])

    /* Click na bolinha do banner */
    const handleBannerClick = (index: number) => {
        setCurrentImage(index);
        clearInterval(bannerTimer);
        bannerTimer = setInterval(nextImage, bannerTime);
    }

    return (
        <div>
            <div className="relative aspect-[3/1]">
                {list.map((banner, index) => (
                    <Link
                        key={index}
                        href={banner.link}
                        className="transition-all absolute inset-0"
                        style={{ opacity: currentImage == index ? 1 : 0 }}>
                        <Image
                            src={banner.img}
                            alt=""
                            width={1200}
                            height={400}
                            className="rounded-sm" />
                    </Link>
                ))}
            </div>
            {/* Bolinhas do Banner */}
            <div className="mt-4 flex justify-center gap-4">
                {list.map((banner, index) => (
                    <div
                        key={index}
                        className="size-4 bg-blue-600 rounded-full cursor-pointer"
                        style={{ opacity: currentImage == index ? 1 : 0.5 }}
                        onClick={() => handleBannerClick(index)}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
}