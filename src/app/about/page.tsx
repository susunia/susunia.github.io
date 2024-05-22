"use client";
import handleViewport, { type InjectedViewportProps } from "react-in-viewport";
import "./styles.scss";
import { FcAbout } from "react-icons/fc";

const Stats = handleViewport(
    (props: InjectedViewportProps<HTMLDivElement>) => {
        const { inViewport, forwardedRef, enterCount } = props;
        return (
            <div ref={forwardedRef} className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 counter-item-wrap-three ${inViewport && enterCount === 1 ? "animate__animated animate__fadeInRight animate__slow" : ""}`}>
                <ul className="list-wrap">
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">1</h2>
                            <p>Employee</p>
                        </div>
                    </li>
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">0</h2>
                            <p>Websites</p>
                        </div>
                    </li>
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">0</h2>
                            <p>Project</p>
                        </div>
                    </li>
                    <li>
                        <div className="counter-item-three">
                            <h2 className="count">0</h2>
                            <p>Product</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    } /**, options: {}, config: {} **/
);

export default function About() {
    return (
        <>
            <div className="container _._mt-10">
                <h2 className="h2_text _._text-center _._text-wrap animate__animated animate__flipInX animate__slower">
                    <FcAbout style={{ display: "inline-block", marginTop: "-15px", marginRight: "5px" }} />
                    About
                    <span className="gradient_text">codexde</span>
                </h2>
            </div>
            <div className="container _._mx-auto _._px-5 _._mt-40">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 animate__animated animate__fadeInLeft animate__slow">
                        <h2 className="_._text-[34px] md:_._text-[38px]">Welcome to codexde.com</h2>
                        <div className="_._text-lg _._text-white/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <Stats />
                </div>
            </div>
        </>
    );
}
