import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import StatusLineChart from "../../../components/chart/StatusLine";
import MiniBarChart from "../../../components/chart/MiniBar";
import { DatePicker } from "../../../components/ui/date-picker";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL

// Data for realtime top content
const realtimeTopContent = [
  {
    title: "Approaching girls in Vietnum AAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    views: "7,647",
    thumbnail: "./content.jpg",
  },
  {
    title: "Approaching girls in Vietnum BBBBBBBBBBBBBBBBBBBBBBBB",
    views: "2,096",
    thumbnail: "./content.jpg",
  },
  {
    title: "Approaching girls in Vienum CCCCCCCCCCCCCCC",
    views: "1,299",
    thumbnail: "./content.jpg",
  },
];

const mockData = Array.from({ length: 48 }, () =>
  Math.floor(Math.random() * 50) + 51
);

export const AnalyticsOverview = (): JSX.Element => {
  const tabs = ["Overview", "Content", "Audience", "Trends"];
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [date, setDate] = useState<Date>(new Date());
  const [statTabs, setStatTabs] = useState<any[]>([{ diff: 0, value: 0 }])
  const [values, setValues] = useState<any>({})

  const safeNumber = (value: any) => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  };

  useEffect(() => {
    fetch(`${apiUrl}/analyticvalue`)
      .then((res) => res.json())
      .then((data) => {
        const result = data[0]
        setValues(result)
        console.log(result)
        setStatTabs([
          {
            label: "Views",
            value: result?.views ?? 0,
            diff: Math.abs(safeNumber(result?.views) - safeNumber(result?.viewsdiff)),
            sign: safeNumber(result?.views) > safeNumber(result?.viewsdiff),
            note: "than usual",
          },
          {
            label: "Watch time (hours)",
            value: result?.watchtime ?? 0,
            diff: Math.abs(safeNumber(result?.watchtime) - safeNumber(result?.watchtimediff)),
            sign: safeNumber(result?.watchtime) > safeNumber(result?.watchtimediff),
            note: "than usual",
          },
          {
            label: "Subscribers",
            value: result?.subscribers ?? 0,
            diff: Math.abs(safeNumber(result?.subscribers) - safeNumber(result?.subscribersdiff)),
            sign: safeNumber(result?.subscribers) > safeNumber(result?.subscribersdiff),
            note: "than previous 28 days",
          },
        ])
      })
      .catch((err) => console.error('Fetch error:', err));
  }, [])

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-[#282828] flex flex-col">
      {/* Scrollable container for everything except navigation tabs */}
      <div className="overflow-y-auto">
        {/* Header */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[22px] px-[15px] sm:px-[30px] gap-4 sm:gap-0">
          <h1 className="font-medium text-white text-xl sm:text-[23.2px] tracking-[0] leading-8">
            Channel analytics
          </h1>
          <Link to="/admin">
            <Button
              variant="ghost"
              className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-9 w-full sm:w-auto font-normal"
            >
              Advanced mode
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Tabs - Sticky */}
      <div className="w-full bg-[#282828] border-b border-[#ffffff1a] sticky top-16 z-10">
        <div className="relative w-full px-4 sm:px-[30px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center h-auto sm:h-12 mt-[21px] gap-4 sm:gap-0 pb-4 sm:pb-0">
            {/* Tabs */}
            <div className="flex space-x-6 sm:space-x-10 overflow-x-auto w-full sm:w-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative h-12 cursor-pointer group flex-shrink-0`}
                  >
                    <div className="h-12 flex items-center">
                      <span
                        className={`font-medium text-sm sm:text-[15px] leading-6 whitespace-nowrap transition-colors duration-200
                        ${isActive ? "text-white" : "text-[#aaaaaa] group-hover:text-white"}`}
                      >
                        {tab}
                      </span>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-sm" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Date Select */}
            <div className="ml-0 sm:ml-auto flex items-center w-full sm:w-auto mt-[-20px]">
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content container */}
      <div className="overflow-y-auto flex-1">

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="flex-1 p-3 lg:p-3">
            {/* Performance Summary */}
            <div className="mb-6 lg:mb-[38px] text-center font-roboto px-2">
              <h2 className="font-bold text-white text-xl sm:text-2xl lg:text-[28px] tracking-[-0.34px] leading-8 lg:leading-10 mt-[18px] mb-[17px]">
                {(() => {
                  const value = Number(statTabs[0].value ?? 0);
                  const diff = Number(statTabs[0].diff ?? 0);
                  const denominator = Math.abs(value - diff);
                  const percentage =
                    denominator === 0 ? 0 : ((diff / denominator) * 100);
                  const signText = statTabs[0].sign ? 'more' : 'less';

                  return (
                    <>
                      Keep it up! Your channel got {percentage.toFixed(0)}% {signText} views than usual in
                      <br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>the last 28 days.
                    </>
                  );
                })()}
              </h2>
              <p className="text-[#aaaaaa] text-sm lg:text-[15px] tracking-[0] leading-6 mb-[1px]">
                Your channel got {statTabs[0].value.toLocaleString('en-US')} views, {statTabs[0].sign ? 'more' : 'less'} than the 5,600–{(values?.viewsdiff ?? 0).toLocaleString('en-US')} it
                usually gets in 28 days
              </p>
            </div>

            {/* Metrics Card */}
            <Card
              className="w-[clamp(300px, 56.99vw, 862px)] mb-6 mx-0 lg:mx-3 bg-[#282828] border border-[#ffffff33] rounded-2xl overflow-hidden"
            >
              {/* Chart Header */}
              <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#212121]">
                {statTabs.map((tab, i) => {
                  const isActive = i === activeTabIndex;
                  return (
                    <div
                      key={i}
                      onClick={() => setActiveTabIndex(i)}
                      className={`p-3 sm:pt-4 sm:pb-5 sm:px-2 font-roboto text-center cursor-pointer transition-colors duration-200
                    ${isActive ? "bg-[#282828]" : "bg-[#1f1f1f] hover:bg-[#2a2a2a]"}
                    ${i < statTabs.length - 1 ? "border-b sm:border-b-0 sm:border-r border-[#ffffff1a]" : ""}`}
                    >
                      <p className="text-[#aaaaaa] text-xs tracking-[0.13px] leading-4 mb-1">
                        {tab.label}
                      </p>
                      <div className="flex items-center justify-center">
                        <span className="text-white text-xl sm:text-2xl tracking-[-0.29px] leading-8">
                          {tab.label == 'Subscribers' ? '+' : ''}
                          {`${tab.value > 1000 ?
                            (Number(tab.value) / 1000).toFixed(1)
                            : tab.value
                            }${tab.value > 1000 ? 'K' : ''}`}
                        </span>
                        <img
                          className="w-[17px] h-[17px] ml-2"
                          src={tab.sign ? './status-rising.svg' : './status-down.svg'}
                          alt="indicator"
                        />
                      </div>
                      <p className="text-[#aaaaaa] text-xs italic tracking-[0.13px] leading-4 mt-[5px]">
                        {(() => {
                          const diff = isNaN(Number(tab.diff)) || tab.diff === '' ? 0 : Number(tab.diff);
                          const isLarge = diff > 1000;
                          const label = tab.label;
                          const sign = tab.sign ?? 0;
                          const note = tab.note ?? '';
                          const subDiff = Number(values?.subscribersdiff ?? 0);

                          let formattedDiff = '';
                          let suffix = '';

                          if (label === 'Subscribers') {
                            // Prevent division by zero
                            if (subDiff === 0) {
                              formattedDiff = '0';
                            } else {
                              formattedDiff = ((diff / subDiff) * 100).toFixed(0);
                            }
                            suffix = '%';
                          } else if (isLarge) {
                            formattedDiff = (diff / 1000).toFixed(1);
                            suffix = 'K';
                          } else {
                            formattedDiff = diff.toString();
                          }

                          const direction = sign ? 'more' : 'less';

                          return `${formattedDiff}${suffix} ${direction} ${note}`;
                        })()}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Graph */}
              <div className="mt-8">
                <StatusLineChart />
              </div>

              <div className="px-4 sm:px-6 pt-0 pb-4 mt-6">
                <Button
                  variant="ghost"
                  className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-9"
                >
                  See more
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[346px] p-3 lg:p-4">
            {/* Realtime Card */}
            <Card className="mb-6 bg-[#282828] border border-[#ffffff33] rounded-2xl overflow-hidden">
              <CardHeader className="p-3 px-4 pb-1 space-y-0">
                <CardTitle className="text-white text-lg lg:text-[18px]">Realtime</CardTitle>
                <div className="flex items-center pb-[10px]" style={{ marginTop: '-2px' }}>
                  <div className="w-2 h-2 bg-[#41b4d9] rounded mr-1"></div>
                  <span className="text-[#aaaaaa] text-[13px]">
                    Updating live
                  </span>
                </div>
              </CardHeader>
              <div className="px-4">
                <Separator className="bg-[#ffffff1a]" />
              </div>
              <CardContent className="pt-[13px] pb-3 px-4 space-y-3">
                <div>
                  <h3 className="text-white text-lg font-medium">{values?.totalsubscribers?.toLocaleString('en-US')}</h3>
                  <p className="text-[#aaaaaa] text-[13px] mb-[10px]">Subscribers</p>
                  <Button
                    variant="ghost"
                    className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-9 w-full sm:w-auto"
                  >
                    See live count
                  </Button>
                </div>

                <Separator className="bg-[#ffffff1a]" />

                <div className="pt-[2px]">
                  <h3 className="text-white text-lg font-medium">{values?.last48?.toLocaleString('en-US')}</h3>
                  <p className="text-[#aaaaaa] text-[13px] mt-[-2px] mb-4">
                    Views · Last 48 hours
                  </p>

                  {/* Mini chart */}
                  <div className="text-white w-full mb-8">
                    <MiniBarChart data={mockData} />
                    <div className="flex justify-between text-xs text-gray-400 mb-1 mt-[-1px]">
                      <span>-48h</span>
                      <span>Now</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[#aaaaaa] text-xs">Top content</span>
                    <span className="text-[#aaaaaa] text-xs">Views</span>
                  </div>

                  {realtimeTopContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center flex-1 min-w-0">
                        <div
                          className="w-12 sm:w-14 h-7 sm:h-8 rounded bg-cover bg-center mr-4 sm:mr-3 relative flex-shrink-0"
                          style={{ backgroundImage: `url(${item.thumbnail})` }}
                        >
                          <div className="absolute right-0 bottom-0 w-3 sm:w-4 h-3 sm:h-4 bg-[#282828] rounded-sm flex items-center justify-center">
                            <img
                              className="w-1 sm:w-1.5 h-2 sm:h-[9px]"
                              alt="Play icon"
                              src={`./content-icon.svg`}
                            />
                          </div>
                        </div>
                        <span className="text-white text-xs sm:text-[13px] truncate font-roboto font-light">
                          <span className="sm:hidden">{item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title}</span>
                          <span className="hidden sm:inline">{item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}</span>
                        </span>
                      </div>
                      <span className="text-white text-xs sm:text-[13px] text-right ml-2 flex-shrink-0">
                        {item.views}
                      </span>
                    </div>
                  ))}

                  <Button
                    variant="ghost"
                    className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-9 mt-3 w-full sm:w-auto"
                  >
                    See more
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};