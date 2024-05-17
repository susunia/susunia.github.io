import * as React from "react";
import { motion } from "framer-motion";
import "./ExampleLogo.scss";

const icon_b = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(109, 52, 243, 0)",
        stroke: "rgba(41, 152, 255, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(109, 52, 243 , 1)",
        stroke: "rgba(41, 152, 255, 1)",
    },
};
const icon_s = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(254, 255, 255 , 0.5)",
    },
};

export const ExampleLogo = () => (
    <div className="fm_container">
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="fm_item">
            <motion.path
                variants={icon_b}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 5, ease: "easeInOut" },
                    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
                }}
                d="M 55.34 398.41 Q 63.55 398.41 69.31 400.59 Q 75.07 402.76 79.87 406.73 L 70.99 417.43 Q 67.85 414.84 64.05 413.32 Q 60.24 411.8 55.78 411.8 Q 50.98 411.8 47.01 414.53 Q 43.04 417.26 40.67 423.13 Q 38.3 429 38.3 438.38 Q 38.3 452.16 43.29 458.42 Q 48.28 464.67 56.11 464.67 Q 61.84 464.67 65.65 462.52 Q 69.45 460.37 72.65 457.84 L 80.86 468.31 Q 76.56 472.56 70.28 475.59 Q 63.99 478.62 55.12 478.62 Q 44.75 478.62 36.73 474.02 Q 28.71 469.41 24.16 460.46 Q 19.61 451.5 19.61 438.38 Q 19.61 425.59 24.33 416.66 Q 29.04 407.73 37.14 403.07 Q 45.25 398.41 55.34 398.41 Z M 111.44 416.27 Q 120.48 416.27 126.82 420.13 Q 133.16 423.99 136.53 430.96 Q 139.89 437.94 139.89 447.31 Q 139.89 461.97 132.39 470.3 Q 124.89 478.62 111.44 478.62 Q 97.99 478.62 90.49 470.41 Q 83 462.19 83 447.42 Q 83 438.1 86.39 431.1 Q 89.78 424.1 96.14 420.18 Q 102.51 416.27 111.44 416.27 Z M 111.44 429.12 Q 106.09 429.12 103.53 433.5 Q 100.97 437.88 100.97 447.42 Q 100.97 457.12 103.53 461.48 Q 106.09 465.83 111.44 465.83 Q 116.79 465.83 119.35 461.48 Q 121.92 457.12 121.92 447.31 Q 121.92 437.83 119.35 433.47 Q 116.79 429.12 111.44 429.12 Z M 181.88 393.12 L 199.3 394.94 L 199.3 476.75 L 183.86 476.75 L 182.98 470.3 Q 180.56 473.71 176.53 476.17 Q 172.51 478.62 166.78 478.62 Q 159.5 478.62 154.73 474.71 Q 149.96 470.79 147.62 463.76 Q 145.28 456.73 145.28 447.31 Q 145.28 438.27 148.09 431.27 Q 150.9 424.26 156.14 420.27 Q 161.37 416.27 168.59 416.27 Q 176.48 416.27 181.88 421.67 Z M 173.28 429 Q 168.76 429 166 433.28 Q 163.25 437.55 163.25 447.42 Q 163.25 454.64 164.4 458.64 Q 165.56 462.63 167.6 464.23 Q 169.64 465.83 172.29 465.83 Q 175.21 465.83 177.61 464.01 Q 180.01 462.19 181.88 459.05 L 181.88 433.8 Q 180.06 431.54 178.02 430.27 Q 175.98 429 173.28 429 Z M 226.19 452.54 Q 227.07 459.71 230.87 462.83 Q 234.68 465.94 240.25 465.94 Q 244.27 465.94 248.02 464.62 Q 251.77 463.29 255.24 461.09 L 262.24 470.57 Q 258.11 474.1 252.24 476.36 Q 246.36 478.62 238.87 478.62 Q 228.83 478.62 222.05 474.62 Q 215.27 470.63 211.85 463.63 Q 208.44 456.62 208.44 447.53 Q 208.44 438.87 211.74 431.79 Q 215.05 424.7 221.42 420.49 Q 227.79 416.27 236.99 416.27 Q 245.37 416.27 251.52 419.85 Q 257.67 423.44 261.06 430.16 Q 264.45 436.89 264.45 446.32 Q 264.45 447.8 264.36 449.51 Q 264.28 451.22 264.12 452.54 Z M 236.99 427.96 Q 232.31 427.96 229.44 431.32 Q 226.57 434.68 225.97 442.07 L 247.47 442.07 Q 247.41 435.68 244.99 431.82 Q 242.56 427.96 236.99 427.96 Z M 294.96 476.75 L 276.1 476.75 L 296.17 445.98 L 277.98 418.2 L 297.49 418.2 L 306.86 436.94 L 315.91 418.2 L 334.43 418.2 L 317.23 445.32 L 337.41 476.75 L 317.67 476.75 L 306.09 454.86 Z M 399.52 438.16 Q 399.52 449.79 396.46 457.34 Q 393.4 464.89 388.16 469.11 Q 382.93 473.33 376.28 475.04 Q 369.64 476.75 362.53 476.75 L 341.91 476.75 L 341.91 400.34 L 361.21 400.34 Q 368.54 400.34 375.4 401.85 Q 382.26 403.37 387.69 407.42 Q 393.12 411.47 396.32 418.89 Q 399.52 426.3 399.52 438.16 Z M 380.78 438.16 Q 380.78 427.85 378.54 422.55 Q 376.31 417.26 372.48 415.36 Q 368.65 413.46 363.85 413.46 L 359.99 413.46 L 359.99 463.68 L 363.85 463.68 Q 368.87 463.68 372.67 461.5 Q 376.48 459.33 378.63 453.76 Q 380.78 448.19 380.78 438.16 Z M 427.01 413.24 L 427.01 431.6 L 453.47 431.6 L 453.47 444.28 L 427.01 444.28 L 427.01 463.79 L 458.93 463.79 L 458.93 476.75 L 408.93 476.75 L 408.93 400.34 L 458.88 400.34 L 457.06 413.24 Z"
                style="fill: rgb(51, 51, 51);"
            />
            <motion.path
                variants={icon_s}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 5, ease: "easeInOut" },
                    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
                }}
                d="M 257.386 -198.578 L 333.152 -67.834 L 181.62 -67.834 L 257.386 -198.578 Z"
                transform="matrix(1, 0, 0, -1, 0, 0)"
            />
            <motion.path
                variants={icon_s}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 5, ease: "easeInOut" },
                    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
                }}
                d="M 162.472 -233.315 L 238.238 -102.571 L 86.706 -102.571 L 162.472 -233.315 Z"
                transform="matrix(0.492804, -0.87014, -0.87014, -0.492804, -30.905869, 224.365157)"
            />
            <motion.path
                variants={icon_s}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 5, ease: "easeInOut" },
                    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
                }}
                d="M 190.372 -314.825 L 266.138 -184.081 L 114.606 -184.081 L 190.372 -314.825 Z"
                transform="matrix(0.999978, -0.006558, -0.006558, -0.999978, -14.854311, 19.760109)"
            />
            <motion.path
                variants={icon_s}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 5, ease: "easeInOut" },
                    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
                }}
                d="M 162.472 -233.315 L 238.238 -102.571 L 86.706 -102.571 L 162.472 -233.315 Z"
                transform="matrix(0.492804, -0.87014, -0.87014, -0.492804, 50.622939, 358.673782)"
            />
        </motion.svg>
    </div>
);
