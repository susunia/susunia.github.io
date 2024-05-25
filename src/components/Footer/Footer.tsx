import { NavLinks } from "@/components/NavLinks";
import Link from "next/link";
import "./Footer.scss";
import { Services } from "../ServiceList";
import { Products } from "../ProductList";

export default function Footer() {
    return (
        <>
            <footer className="_._text-lg _._mt-20">
                <div className="container _._py-5">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">CodexDE</h4>
                                <div className="footer-link">Codex Development Environment</div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Quick Links</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        {NavLinks.map((nav, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link href={nav.path} className={`text-[#6721ff] hover:text-[#6721ff]`}>
                                                        {nav.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Products</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        {Products.map((service, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link href={`/products/${service.link}`} className={`text-[#6721ff] hover:text-[#6721ff]`}>
                                                        {service.heading}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Services</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        {Services.map((service, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link href={`/offered-services/${service.link}`} className={`text-[#6721ff] hover:text-[#6721ff]`}>
                                                        {service.heading}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Office</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        <li>AB-47/2, Prafulla Kanan, Kestopur, Kolkata, West Bengal, 700101.</li>
                                        <li>+91 9734606012</li>
                                        <li>info@codexde.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            {/* <img src="/new_logo.png" alt="logo" width="80px" height="auto" className="animate__animated animate__backInRight animate__faster`" /> */}
                            <h2 className="gradient_text">CodexDE</h2>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="_._bg-[#2f1f03] _._py-3">
                <div className="container _._font-semibold">Copyright © 2024 Reserved by | codexde.com</div>
            </div>
        </>
    );
}
