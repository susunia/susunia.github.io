"use client";
import type { Metadata } from "next";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { GoChevronLeft } from "react-icons/go";
import { FcHome, FcNext } from "react-icons/fc";
import { Products } from "@/components/ProductList";

const metadata: Metadata = {
    title: "Our Products : codexde.com",
    description: "codexde | TITLE- LIST",
};

function getCurrentService(path: string | null) {
    return Products.filter((s) => path?.includes(s.link))[0];
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();
    const service = getCurrentService(pathName);
    return (
        <>
            <Container className="_._mt-5">
                <Row>
                    <center>
                        <b className="_._whitespace-nowrap">
                            <FcHome style={{ display: "inline-block", marginTop: "-2px", marginRight: "2px", marginLeft: "2px" }} /> Home
                            <FcNext style={{ display: "inline-block", marginTop: "-2px", marginRight: "2px", marginLeft: "2px" }} />
                            Products{!!service ? <FcNext style={{ display: "inline-block", marginTop: "-2px", marginRight: "2px", marginLeft: "2px" }} /> : ""}
                            {service?.heading}
                        </b>
                    </center>
                </Row>
            </Container>
            {children}
            <center>
                <Link href="/products" type="button" className="_._p-4">
                    <GoChevronLeft style={{ display: "inline-block", marginTop: "-2px", marginRight: "2px", marginLeft: "2px" }} /> Back to products
                </Link>
            </center>
        </>
    );
}
