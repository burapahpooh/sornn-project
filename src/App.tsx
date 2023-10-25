import "bootstrap/dist/css/bootstrap.css";
import { users, user, conversation, conversations } from "./data/data.tsx";
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./fonts.css";
import "./index.css";
//import Login from "./Login.tsx";

function App() {
  var count = 0;
  //var [count, setCount] = useState(10);
  var userData: any = [];
  var conversationData: Array<conversation> = conversations;
  var [currentChatUser, setCurrentChatUser] = useState<user | null>(null);
  //user import
  users.forEach((e: user) => {
    userData.push(
      <li
        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        onClick={() => {
          setCurrentChatUser((currentChatUser = e));
        }}
      >
        <div
          style={
            {
              width: "25%",
            } as React.CSSProperties
          }
        >
          <img
            src={"data:image/png;base64," + e.user_img}
            style={{ width: "100%" } as React.CSSProperties}
          />
        </div>
        <div
          style={
            {
              fontSize: "150%",
              paddingLeft: "5%",
              width: "50%",
              height: "100%",
            } as React.CSSProperties
          }
        >
          {e.user_name}
        </div>
        <div
          style={
            {
              width: "15%",
              height: "100%",
            } as React.CSSProperties
          }
        >
          {count > 0 ? (
            <span
              className="badge badge-primary border"
              style={
                {
                  color: "#ffffff",
                  backgroundColor: "#3d67ff",
                  fontSize: "100%",
                } as React.CSSProperties
              }
            >
              {count}
            </span>
          ) : (
            <></>
          )}
        </div>
      </li>
    );
  });
  return (
    <>
      <div
        style={
          {
            overflowX: "hidden",
            height: "100vh",
            fontFamily: "DBHeaventCondBold",
            padding: 0,
            margin: 0,
          } as React.CSSProperties
        }
      >
        <div className="row" style={{} as React.CSSProperties}>
          <div
            className="border"
            style={
              {
                width: "5%",
                height: "100vh",
                backgroundColor: "#5E8B6F",
                paddingLeft: "20px",
                paddingTop: "10px",
              } as React.CSSProperties
            }
          >
            <div
              className="row"
              style={{ marginBottom: "30vh" } as React.CSSProperties}
            >
              <img
                src="/sornn-project/sornn-logo.svg"
                style={{ width: "100%" } as React.CSSProperties}
              ></img>
            </div>
            <div
              className="row"
              style={
                {
                  marginBottom: "1vh",
                  padding: "10px",
                } as React.CSSProperties
              }
            >
              <svg
                className="nav-bar"
                fill="#fcbc59"
                xmlns="http://www.w3.org/2000/svg"
                textRendering="geometricPrecision"
                shapeRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 150 150"
                version="1.1"
              >
                <g>
                  <path
                    style={
                      {
                        opacity: "1",
                      } as React.CSSProperties
                    }
                    d="M 67.5,-0.5 C 70.5,-0.5 73.5,-0.5 76.5,-0.5C 98.8333,21.1667 120.833,43.1667 142.5,65.5C 142.5,69.1667 142.5,72.8333 142.5,76.5C 139.122,82.0248 134.122,84.6915 127.5,84.5C 127.667,100.17 127.5,115.837 127,131.5C 124.349,137.67 119.849,141.337 113.5,142.5C 105.167,142.5 96.8333,142.5 88.5,142.5C 87.3117,141.636 86.1451,140.636 85,139.5C 84.6667,126.833 84.3333,114.167 84,101.5C 82.992,99.741 81.492,98.5743 79.5,98C 74.1667,97.3333 68.8333,97.3333 63.5,98C 61.3333,98.8333 59.8333,100.333 59,102.5C 58.6667,114.833 58.3333,127.167 58,139.5C 57.015,140.814 55.8484,141.814 54.5,142.5C 51.5,142.5 48.5,142.5 45.5,142.5C 44.8333,141.167 44.1667,141.167 43.5,142.5C 39.1667,142.5 34.8333,142.5 30.5,142.5C 23.1525,141.661 18.3192,137.661 16,130.5C 15.5001,115.17 15.3334,99.837 15.5,84.5C 6.20584,84.7036 1.20584,80.2036 0.5,71C 0.329086,67.8707 1.16242,65.0373 3,62.5C 24.0906,40.9074 45.5906,19.9074 67.5,-0.5 Z M 69.5,9.5 C 71.1992,9.33982 72.8659,9.50649 74.5,10C 93.6667,29.1667 112.833,48.3333 132,67.5C 134.379,71.029 133.546,73.529 129.5,75C 125.668,74.9618 122.168,75.7951 119,77.5C 118.959,95.2324 118.293,112.899 117,130.5C 116.25,131.126 115.416,131.626 114.5,132C 107.842,132.5 101.175,132.666 94.5,132.5C 94.6665,122.494 94.4998,112.494 94,102.5C 91.1738,91.0726 83.8405,86.406 72,88.5C 64.2004,87.105 57.5338,89.105 52,94.5C 51.1376,96.087 50.4709,97.7536 50,99.5C 49.5002,110.495 49.3335,121.495 49.5,132.5C 42.4921,132.666 35.4921,132.5 28.5,132C 27.6667,131.167 26.8333,130.333 26,129.5C 24.7072,111.899 24.0406,94.2324 24,76.5C 19.8394,75.8125 15.6727,74.9791 11.5,74C 10.7069,72.9148 10.0402,71.7481 9.5,70.5C 29.5212,50.1458 49.5212,29.8125 69.5,9.5 Z"
                  />
                </g>
              </svg>
            </div>
            <div
              className="row"
              style={
                {
                  marginBottom: "1vh",
                  padding: "10px",
                  backgroundColor: "#fcbc59",
                } as React.CSSProperties
              }
            >
              <svg
                //className="nav-bar"
                fill="#5E8B6F"
                xmlns="http://www.w3.org/2000/svg"
                textRendering="geometricPrecision"
                shapeRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 150 150"
                version="1.1"
              >
                <g>
                  <path d="M 141.5,110.5 C 141.5,113.167 141.5,115.833 141.5,118.5C 139.61,122.04 136.61,124.04 132.5,124.5C 123.295,122.098 114.295,119.098 105.5,115.5C 97.5457,119.072 89.2123,121.239 80.5,122C 65.7552,138.966 47.7552,143.466 26.5,135.5C 20.2589,137.787 13.9256,139.787 7.5,141.5C 3.8048,141.29 1.13813,139.623 -0.5,136.5C -0.5,134.167 -0.5,131.833 -0.5,129.5C 1.57488,124.455 3.57488,119.288 5.5,114C -2.83916,93.1925 1.32751,75.3592 18,60.5C 22.125,24.0418 42.4583,4.04183 79,0.5C 113.379,3.21404 133.379,21.5474 139,55.5C 139.817,66.6151 137.983,77.2818 133.5,87.5C 135.802,95.4093 138.468,103.076 141.5,110.5 Z M 72.5,10.5 C 100.095,9.93448 118.595,22.6011 128,48.5C 129.455,55.4436 129.788,62.4436 129,69.5C 127.447,75.6011 125.613,81.6011 123.5,87.5C 126.077,96.4857 129.077,105.319 132.5,114C 123.298,111.601 114.131,108.768 105,105.5C 76.3972,118.018 53.0638,111.685 35,86.5C 22.7371,60.4717 27.5705,38.305 49.5,20C 56.5936,15.1437 64.2602,11.977 72.5,10.5 Z M 18.5,73.5 C 26.1579,98.6545 42.8246,114.488 68.5,121C 55.4456,130.578 41.4456,132.078 26.5,125.5C 21.4158,126.873 16.4158,128.54 11.5,130.5C 11.1667,130 10.8333,129.5 10.5,129C 12.2675,123.864 13.9341,118.698 15.5,113.5C 8.21328,99.5178 9.21328,86.1845 18.5,73.5 Z" />
                </g>
                <g>
                  <path d="M 51.5,38.5 C 69.8364,38.3334 88.1697,38.5001 106.5,39C 108.706,41.209 109.04,43.709 107.5,46.5C 88.5088,47.6664 69.5088,47.833 50.5,47C 49.0406,43.9295 49.3739,41.0961 51.5,38.5 Z" />
                </g>
                <g>
                  <path d="M 51.5,55.5 C 69.5031,55.3334 87.5031,55.5001 105.5,56C 108.379,57.6658 109.212,60.1658 108,63.5C 106.933,64.1905 105.766,64.6905 104.5,65C 87.1667,65.6667 69.8333,65.6667 52.5,65C 48.86,62.3016 48.5267,59.135 51.5,55.5 Z" />
                </g>
                <g>
                  <path d="M 50.5,73.5 C 62.8378,73.3335 75.1712,73.5001 87.5,74C 90.1667,76.6667 90.1667,79.3333 87.5,82C 75.5,82.6667 63.5,82.6667 51.5,82C 49.2645,79.4149 48.9312,76.5815 50.5,73.5 Z" />
                </g>
              </svg>
            </div>
            <div
              className="row"
              style={
                { marginBottom: "1vh", padding: "10px" } as React.CSSProperties
              }
            >
              <svg
                className="nav-bar"
                fill="#fcbc59"
                xmlns="http://www.w3.org/2000/svg"
                textRendering="geometricPrecision"
                shapeRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 150 150"
                version="1.1"
              >
                <path
                  d="M0 0 C3.09292872 1.2887203 4.45193872 2.19095716 6.3125 4.9375 C7 7 7 7 7 11 C10.71599191 11.20086443 11.77208445 11.1519437 15 9 C18.47162189 8.46590432 20.88847486 8.31116752 23.94140625 10.203125 C27.10294921 12.81684319 29.48828205 15.11917184 31 19 C30.70247286 23.16538003 30.0216939 26.36095098 28 30 C28 30.66 28 31.32 28 32 C29.258125 32.2475 30.51625 32.495 31.8125 32.75 C34.52095185 33.2828102 35.74665706 33.75008834 37.73046875 35.70703125 C40.18581888 40.14177133 39.70958632 45.09983789 39 50 C36.47986993 53.78019511 35.07220714 54.7370058 30.6875 55.8125 C29.3571875 55.9053125 29.3571875 55.9053125 28 56 C28.42779335 58.56676013 28.77653647 60.62756078 30.125 62.875 C31.56719345 66.37746982 31.09971811 68.3953684 30 72 C26.62025308 76.21648038 23.58700087 78.76585233 18.1875 79.5625 C15 79 15 79 12 77 C9.37468476 76.83286431 9.37468476 76.83286431 7 77 C6.896875 78.093125 6.79375 79.18625 6.6875 80.3125 C5.80239521 85.05988024 5.80239521 85.05988024 3 87 C-2.02950475 88.67650158 -7.02791589 88.83918473 -11.9375 86.75 C-14.12550424 84.89351155 -15.09675638 83.70973087 -16 81 C-16 79.68 -16 78.36 -16 77 C-19.71599191 76.79913557 -20.77208445 76.8480563 -24 79 C-27.64427525 79.6431074 -29.98459765 79.60960212 -33.19921875 77.6796875 C-36.66811955 74.90207572 -38.69706694 72.86096766 -40.1875 68.625 C-39.95043511 64.04174542 -38.69997201 60.23552348 -37 56 C-38.258125 55.7525 -39.51625 55.505 -40.8125 55.25 C-43.52095185 54.7171898 -44.74665706 54.24991166 -46.73046875 52.29296875 C-49.18393479 47.86163163 -48.71672374 42.89649583 -48 38 C-45.2684022 34.09771743 -42.51095985 32.41773024 -38 31 C-38.144375 30.319375 -38.28875 29.63875 -38.4375 28.9375 C-38.623125 27.968125 -38.80875 26.99875 -39 26 C-39.2475 24.845 -39.495 23.69 -39.75 22.5 C-40.04529569 18.36586028 -39.59049462 17.17544502 -37 14 C-33.72002684 10.64548199 -32.01845482 9.12083362 -27.3125 8.5625 C-24 9 -24 9 -21 11 C-18.9172483 11.23075102 -18.9172483 11.23075102 -17 10 C-15.96898053 7.68020619 -14.97063483 5.34570085 -14 3 C-9.80132384 -1.00573918 -5.5018101 -0.65986053 0 0 Z M-8 9 C-8.185625 10.258125 -8.37125 11.51625 -8.5625 12.8125 C-9.49229566 16.53827693 -9.74602554 16.84370803 -13.25 19 C-18.20014152 20.32003774 -21.25119813 20.91241836 -25.875 18.5 C-26.57625 18.005 -27.2775 17.51 -28 17 C-28.99 17.99 -29.98 18.98 -31 20 C-30.690625 20.721875 -30.38125 21.44375 -30.0625 22.1875 C-29.711875 23.115625 -29.36125 24.04375 -29 25 C-28.71125 25.7425 -28.4225 26.485 -28.125 27.25 C-27.92204305 31.71505286 -29.34021793 35.42034692 -32 39 C-34.77963166 40.38716856 -36.85559686 40.63315297 -40 41 C-40 42.65 -40 44.3 -40 46 C-39.38511719 46.1959375 -38.77023438 46.391875 -38.13671875 46.59375 C-31.71652389 48.96932449 -31.71652389 48.96932449 -29.69921875 51.87109375 C-27.25294109 58.00417851 -28.45886633 62.07068811 -31 68 C-30.34 68.66 -29.68 69.32 -29 70 C-25.69316534 69.71016731 -25.69316534 69.71016731 -23 68 C-17.94447697 67.51852162 -14.35115712 68.37288627 -10 71 C-8.51465199 73.65166 -7.82574228 76.0370424 -7 79 C-5.35 79 -3.7 79 -2 79 C-1.649375 77.741875 -1.29875 76.48375 -0.9375 75.1875 C0.40511878 71.60929429 0.83761785 71.09804205 4.3125 69 C7.80338585 68.05331909 10.41652231 67.58331655 14 68 C14.66 68.66 15.32 69.32 16 70 C18.60280568 69.67958603 18.60280568 69.67958603 21 69 C21.36980013 64.95377498 21.36980013 64.95377498 19 62 C19.27903898 57.07031137 20.1405443 53.05858228 23 49 C25.64005223 47.61214646 28.11345591 46.85176711 31 46 C31 44.35 31 42.7 31 41 C30.38511719 40.86464844 29.77023438 40.72929688 29.13671875 40.58984375 C24.55079951 39.36839477 22.52095036 38.81206968 19.875 34.6875 C18.54029374 29.06266647 19.70890562 25.19314727 22 20 C21.34 19.34 20.68 18.68 20 18 C16.69316534 18.28983269 16.69316534 18.28983269 14 20 C9.26922817 20.57692339 5.82846994 19.53623316 1.703125 17.35546875 C-1.21556128 15.03256935 -1.44654276 12.59747204 -2 9 C-3.98 9 -5.96 9 -8 9 Z "
                  transform="translate(104,0)"
                />
                <path
                  d="M0 0 C4.70588235 0.70588235 4.70588235 0.70588235 6 2 C6.28074159 6.77260704 6.44486479 10.83467481 4 15 C-0.18593232 17.64338908 -4.56162806 20.22564039 -9.6171875 19.7578125 C-13.11568614 18.64517523 -15.86637394 16.90475309 -19 15 C-21.14567913 16.72855926 -21.14567913 16.72855926 -23 19 C-22.91083265 21.76418777 -21.93866085 23.08964952 -20.375 25.375 C-18.22836619 29.4731191 -19.42060352 32.05112094 -20.6875 36.3125 C-22.87578075 42.40842495 -22.87578075 42.40842495 -25.9375 44.01953125 C-28.96539556 44.79320309 -31.88330674 45 -35 45 C-35 47.97 -35 50.94 -35 54 C-33.89591797 54.02513672 -33.89591797 54.02513672 -32.76953125 54.05078125 C-29.54152067 54.33648364 -27.00244069 54.75775596 -24 56 C-20.56475708 60.33511944 -19 64.92924906 -19 70.4375 C-20 73 -20 73 -21.625 75.125 C-23.21511229 76.88998436 -23.21511229 76.88998436 -22.9375 79.0625 C-21.75043057 81.51577682 -20.264488 82.53904 -18 84 C-17.52691406 83.60425781 -17.05382812 83.20851563 -16.56640625 82.80078125 C-11.25810542 78.85835899 -11.25810542 78.85835899 -7.640625 79.265625 C-5.34906639 80.04998399 -3.19603872 80.981608 -1 82 C0.4540625 82.37125 0.4540625 82.37125 1.9375 82.75 C4 84 4 84 5.3125 87.375 C6 91 6 91 6 95 C8.64 95 11.28 95 14 95 C14.28875 94.113125 14.5775 93.22625 14.875 92.3125 C15.24625 91.219375 15.6175 90.12625 16 89 C16.23332031 88.16726562 16.46664062 87.33453125 16.70703125 86.4765625 C18.47236191 83.09523429 20.31805832 82.48009718 23.8125 81.0625 C24.85019531 80.62035156 25.88789062 80.17820312 26.95703125 79.72265625 C30.51066395 78.87872551 31.84120089 79.27850914 35 81 C36.36365283 81.95824253 37.70794169 82.94721175 39 84 C41.46800047 82.84826645 43.04783565 81.95216435 45 80 C44.74003655 77.40036554 44.11661122 76.13993346 42.4375 74.125 C40.38099556 71.08494996 40.45943756 69.64879649 41 66 C42.07287449 62.12573101 43.32316593 59.03411172 46 56 C49.96440519 54.4374648 53.74106189 53.82385485 58 54 C60 56 60 56 60.125 58.625 C60.08375 59.40875 60.0425 60.1925 60 61 C59.43410156 61.23074219 58.86820312 61.46148437 58.28515625 61.69921875 C53.65436649 63.6155712 53.65436649 63.6155712 50.8125 67.5 C50.76301202 70.05352081 50.76301202 70.05352081 52.4375 71.75 C54.52747419 74.75956283 54.66024674 76.99563081 54.55859375 80.61328125 C53.2580516 86.17014316 48.57072139 89.95285241 44 93 C38.43156024 93.44193966 36.40406801 93.37645214 32 90 C28.91773646 89.4294624 28.91773646 89.4294624 26 91 C24.76577891 93.47283442 23.92917745 95.90340431 23.15234375 98.5546875 C21.6382668 101.76761012 20.23159072 102.58818448 17 104 C14.0625 104.3984375 14.0625 104.3984375 11 104.375 C9.989375 104.38273437 8.97875 104.39046875 7.9375 104.3984375 C4.56247515 103.94065487 2.70361746 103.05134611 0 101 C-1.64451925 97.7109615 -2.83930349 94.48208954 -4 91 C-6.80764728 90.22573891 -6.80764728 90.22573891 -10 90 C-10.61875 90.474375 -11.2375 90.94875 -11.875 91.4375 C-14.48177 93.35424265 -16.62532926 93.66494158 -19.83984375 93.55078125 C-25.14710965 92.1975724 -28.70428135 87.57056806 -32.0625 83.5 C-33.3928387 79.95243014 -32.89698401 77.65200633 -32 74 C-31.443125 72.948125 -30.88625 71.89625 -30.3125 70.8125 C-28.69434257 68.165406 -28.69434257 68.165406 -29.640625 65.91796875 C-31.37226585 63.47476284 -32.56748919 63.21632454 -35.4375 62.5 C-38.15811361 61.81872608 -39.6875326 61.290198 -41.75390625 59.37109375 C-43.50406714 56.04085029 -43.47030374 53.30794044 -43.5 49.5625 C-43.5309375 48.26441406 -43.561875 46.96632812 -43.59375 45.62890625 C-42.85910854 41.13889365 -41.54965909 39.75859221 -38 37 C-35.89498519 36.04079999 -33.89738213 35.47766994 -31.671875 34.87109375 C-29.8238031 34.12627328 -29.8238031 34.12627328 -29.140625 32.11328125 C-28.77276838 29.66601841 -28.77276838 29.66601841 -31 26.75 C-32.97219712 23.49309701 -33.59044796 20.93679412 -32.88671875 17.0625 C-30.89311474 12.42539463 -26.49703244 8.24851622 -22 6 C-15.77098724 5.52988583 -15.77098724 5.52988583 -12.4375 7.5625 C-10.02227095 9.2459368 -10.02227095 9.2459368 -6.875 9.125 C-3.62487221 8.21753546 -3.62487221 8.21753546 -2.1875 4.5 C-1.795625 3.345 -1.40375 2.19 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z "
                  transform="translate(44,39)"
                />
                <path
                  d="M0 0 C0.66 0.66 1.32 1.32 2 2 C1.625 5.125 1.625 5.125 1 8 C0.26394531 8.15855469 -0.47210938 8.31710938 -1.23046875 8.48046875 C-7.1423655 9.89401342 -11.18509753 10.95448383 -15 16 C-17.50671649 20.31761844 -17.6444569 24.10873739 -17 29 C-15.62537209 33.45449045 -13.3227322 36.15469454 -9.3125 38.5 C-4.72271542 40.48292369 -0.76436077 40.367548 4 39 C8.95027354 36.52486323 11.02415092 34.13720762 13 29 C13.76235935 26.34372906 14.39496598 23.69938256 15 21 C17.375 20.375 17.375 20.375 20 20 C22.44950621 22.44950621 22.32271254 23.24723021 22.375 26.625 C22.22440399 32.77286056 20.58717378 37.17588209 16.421875 41.72265625 C10.03429036 47.57794217 3.69317589 49.65848629 -4.93359375 49.41015625 C-11.48430238 48.53394682 -16.86487186 45.55365252 -21.4375 40.8125 C-25.70361171 35.21322838 -27.36661713 28.85888123 -26.9375 21.875 C-25.82409247 14.39758943 -22.89311681 8.93648262 -16.921875 4.25390625 C-11.5755786 0.76577384 -6.41726288 -0.64172629 0 0 Z "
                  transform="translate(57,64)"
                />
                <path
                  d="M0 0 C3.59091369 2.76017992 5.68994786 5.70859649 7.1328125 9.95703125 C7.8340461 15.92725623 7.66434886 20.89516246 4.1328125 25.95703125 C-0.39487801 30.28786565 -3.96010847 32.62792796 -10.1796875 33.33203125 C-16.19263646 32.72054491 -20.82396234 30.49473525 -24.8046875 25.89453125 C-28.40642288 20.76478692 -28.3798304 16.03279894 -27.8671875 9.95703125 C-26.10753608 4.77583541 -23.33902819 2.05292096 -18.8671875 -1.04296875 C-12.56399165 -3.83092076 -6.03368928 -3.37028251 0 0 Z M-18.8671875 9.95703125 C-20.01607268 13.90632404 -20.29848146 15.98661984 -18.6171875 19.76953125 C-16.12085848 22.88994252 -14.46932399 23.87897652 -10.4921875 24.39453125 C-6.76501443 24.24735388 -6.76501443 24.24735388 -3.9921875 21.83203125 C-1.59903867 18.59424165 -0.78509602 16.979514 -0.8671875 12.95703125 C-3.11439891 8.71494985 -3.11439891 8.71494985 -6.8671875 5.95703125 C-12.27403703 5.44695111 -15.21676478 5.76978166 -18.8671875 9.95703125 Z "
                  transform="translate(109.8671875,29.04296875)"
                />
              </svg>
            </div>
          </div>
          <div
            style={
              {
                width: "20%",
                height: "100vh",
              } as React.CSSProperties
            }
          >
            <div
              style={
                {
                  fontSize: "50px",
                  textAlign: "center",
                  height: "10%",
                } as React.CSSProperties
              }
            >
              กล่องข้อความ
            </div>
            <Scrollbars
              //autoHide
              style={{ width: "100%", height: "90%" }}
            >
              <ul
                className="list-group"
                style={{ fontSize: 15 } as React.CSSProperties}
              >
                {userData}
              </ul>
            </Scrollbars>
          </div>
          <div
            style={
              {
                width: "75%",
                height: "100vh",
                padding: 0,
              } as React.CSSProperties
            }
          >
            <div
              className="border"
              style={
                {
                  height: "5%",
                  fontSize: "150%",
                  fontWeight: "bold",
                  paddingLeft: "1%",
                } as React.CSSProperties
              }
            >
              <div
                className="row"
                style={{ height: "100%" } as React.CSSProperties}
              >
                {currentChatUser?.user_img != null ? (
                  <img
                    src={"data:image/png;base64," + currentChatUser?.user_img}
                    style={
                      {
                        height: "80%",
                        width: "auto",
                        margin: "auto 0",
                      } as React.CSSProperties
                    }
                  />
                ) : (
                  <></>
                )}
                <div
                  style={
                    { width: "10%", margin: "auto 0" } as React.CSSProperties
                  }
                >
                  {currentChatUser?.user_name}
                </div>
              </div>
            </div>
            <div
              className="border"
              style={{ height: "90%" } as React.CSSProperties}
            >
              {conversationData[0].conversation_id}
            </div>
            <div
              className="border"
              style={{ height: "5%" } as React.CSSProperties}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
