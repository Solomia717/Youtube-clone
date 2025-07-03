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
  Math.floor(Math.random() * 100)
);

export const AnalyticsOverview = (): JSX.Element => {
  const tabs = ["Overview", "Content", "Audience", "Trends"];
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [date, setDate] = useState<Date>(new Date());
  const [statTabs, setStatTabs] = useState<any[]>([{ diff: 0, value: 0 }])
  const [values, setValues] = useState<any>({})

  useEffect(() => {
    fetch('http://localhost:5000/analyticvalue')
      .then((res) => res.json())
      .then((data) => {
        const result = data[0]
        setValues(result)
        setStatTabs([
          {
            label: "Views",
            value: result.views,
            diff: Math.abs(result.views - result.viewsdiff),
            sign: result.views > result.viewsdiff,
            note: "than usual",
          },
          {
            label: "Watch time (hours)",
            value: result.watchtime,
            diff: Math.abs(result.watchtime - result.watchtimediff),
            sign: result.watchtime > result.watchtimediff,
            note: "than usual",
          },
          {
            label: "Subscribers",
            value: result.subscribers,
            diff: Math.abs(result.subscribers - result.subscribersdiff),
            sign: result.subscribers > result.subscribersdiff,
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
        <div className="w-full flex justify-between items-center pt-4 px-[25px]">
          <h1 className="font-semibold text-white text-[23.2px] tracking-[0] leading-8">
            Channel analytics
          </h1>
          <Link to="/admin">
            <Button
              variant="ghost"
              className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-9"
            >
              Advanced mode
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Tabs - Sticky */}
      <div className="w-full bg-[#282828] border-b border-[#ffffff1a] sticky top-16 z-10">
        <div className="relative w-full px-6">
          <div className="flex items-center h-12 mt-[23px]">
            {/* Tabs */}
            <div className="flex space-x-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative h-12 cursor-pointer group`}
                  >
                    <div className="h-12 flex items-center">
                      <span
                        className={`font-medium text-[15px] leading-6 whitespace-nowrap transition-colors duration-200
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
            <div className="ml-auto flex items-center">
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content container */}
      <div className="overflow-y-auto flex-1">

        {/* Main Content */}
        <div className="flex flex-row">
          {/* Left Column */}
          <div className="flex-1 p-3">
            {/* Performance Summary */}
            <div className="mb-[38px] text-center font-roboto">
              <h2 className="font-bold text-white text-[28px] tracking-[-0.34px] leading-10 mt-5 mb-2">
                Keep it up! Your channel got {(statTabs[0].diff / Math.abs(statTabs[0].value - statTabs[0].diff) * 100).toFixed(0)}% {statTabs[0].sign ? 'more' : 'less'} views than usual in
                <br />
                the last 28 days.
              </h2>
              <p className="text-[#aaaaaa] text-[15px] tracking-[0] leading-6">
                Your channel got {statTabs[0].value.toLocaleString('en-US')} views, {statTabs[0].sign ? 'more' : 'less'} than the 5,600–{Math.abs(statTabs[0].value - statTabs[0].diff).toLocaleString('en-US')} it
                usually gets in 28 days
              </p>
            </div>

            {/* Metrics Card */}
            <Card className="mb-6 ml-3 bg-[#282828] border border-[#ffffff33] rounded-2xl overflow-hidden">
              {/* Chart Header */}
              <div className="grid grid-cols-3 bg-[#212121]">
                {statTabs.map((tab, i) => {
                  const isActive = i === activeTabIndex;
                  return (
                    <div
                      key={i}
                      onClick={() => setActiveTabIndex(i)}
                      className={`p-4 font-roboto text-center cursor-pointer transition-colors duration-200
                    ${isActive ? "bg-[#282828]" : "bg-[#1f1f1f] hover:bg-[#2a2a2a]"}
                    ${i < statTabs.length - 1 ? "border-r border-[#ffffff1a]" : ""}`}
                    >
                      <p className="text-[#aaaaaa] text-xs tracking-[0.13px] leading-4 mb-2">
                        {tab.label}
                      </p>
                      <div className="flex items-center justify-center">
                        <span className="text-white text-2xl tracking-[-0.29px] leading-8">
                          {tab.label == 'Subscribers' ? '+' : ''}
                          {`${tab.value > 1000 ?
                            (Number(tab.value) / 1000).toFixed(1)
                            : tab.value
                            }${tab.value > 1000 ? 'K' : ''}`}
                        </span>
                        <img
                          className="w-[17px] h-[17px] ml-1"
                          src={tab.sign ? './status-rising.svg' : './status-down.svg'}
                          alt="indicator"
                        />
                      </div>
                      <p className="text-[#aaaaaa] text-xs italic tracking-[0.13px] leading-4 mt-2">
                        {`${tab.diff > 1000 ?
                          (Number(tab.diff) / 1000).toFixed(1)
                          : tab.label === 'Subscribers' ?
                            (tab.diff / values.subscribersdiff * 100).toFixed(0)
                            : tab.diff
                          }${tab.label === 'Subscribers' ? '%' : tab.diff > 1000 ? 'K' : ''} ${tab.sign ? 'more' : 'less'} ${tab.note}`}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Graph */}
              <div className="mt-2">
                <StatusLineChart />
              </div>

              <div className="p-4 pt-0">
                <Button
                  variant="ghost"
                  className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-8"
                >
                  See more
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="w-[346px] p-4">
            {/* Realtime Card */}
            <Card className="mb-6 bg-[#282828] border border-[#ffffff33] rounded-2xl overflow-hidden">
              <CardHeader className="p-3 px-4 pb-1 space-y-0">
                <CardTitle className="text-white text-[18px]">Realtime</CardTitle>
                <div className="flex items-center pb-2">
                  <div className="w-2 h-2 bg-[#41b4d9] rounded mr-2"></div>
                  <span className="text-[#aaaaaa] text-[13px]">
                    Updating live
                  </span>
                </div>
              </CardHeader>
              <div className="px-4">
                <Separator className="bg-[#ffffff1a]" />
              </div>
              <CardContent className="p-3 px-4 space-y-3">
                <div>
                  <h3 className="text-white text-lg font-medium">{values.totalsubscribers?.toLocaleString('en-US')}</h3>
                  <p className="text-[#aaaaaa] text-[13px] mb-2">Subscribers</p>
                  <Button
                    variant="ghost"
                    className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-8"
                  >
                    See live count
                  </Button>
                </div>

                <Separator className="bg-[#ffffff1a]" />

                <div>
                  <h3 className="text-white text-lg font-medium">{values.last48?.toLocaleString('en-US')}</h3>
                  <p className="text-[#aaaaaa] text-[13px] mb-2">
                    Views · Last 48 hours
                  </p>

                  {/* Mini chart */}
                  <div className="text-white w-full mb-5">
                    <MiniBarChart data={mockData} />
                    <div className="flex justify-between text-xs text-gray-400 mb-1 px-1">
                      <span>-48h</span>
                      <span>Now</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#aaaaaa] text-xs">Top content</span>
                    <span className="text-[#aaaaaa] text-xs">Views</span>
                  </div>

                  {realtimeTopContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center">
                        <div
                          className="w-14 h-8 rounded bg-cover bg-center mr-4 relative"
                          style={{ backgroundImage: `url(${item.thumbnail})` }}
                        >
                          <div className="absolute right-0 bottom-0 w-4 h-4 bg-[#282828] rounded-sm flex items-center justify-center">
                            <img
                              className="w-1.5 h-[9px]"
                              alt="Play icon"
                              src={`./content-icon.svg`}
                            />
                          </div>
                        </div>
                        <span className="text-white text-[13px]">
                          {item.title.length > 21 ? `${item.title.slice(0, 21)}...` : item.title}
                        </span>
                      </div>
                      <span className="text-white text-[13px] text-right">
                        {item.views}
                      </span>
                    </div>
                  ))}

                  <Button
                    variant="ghost"
                    className="bg-[#ffffff1a] rounded-[18px] text-white text-sm h-8 mt-2"
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