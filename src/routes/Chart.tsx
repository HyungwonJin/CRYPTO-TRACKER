import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div>
      {
        isLoading ? (
          "Loading chart..."
        ) : (
          <ApexChart
            type="candlestick"
            series={[
              {
                name: "Price",
                data: data?.map((price) => ({
                  x: price.time_close,
                  y: [price.open, price.high, price.low, price.close],
                })),
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                type: "candlestick",
                height: 500,
                width: 500,
                background: "transparent",
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: "#00B746",
                    downward: "#EF403C",
                  },
                  wick: {
                    useFillColor: true,
                  },
                },
              },
              yaxis: {
                show: true,
                labels: {
                  formatter: function (val, index) {
                    return val.toFixed(0);
                  },
                },
              },
              xaxis: {
                type: "datetime",
                labels: {
                  show: true,
                },
              },
            }}
          />
        )
        // <ApexChart
        //   type="line"
        //   series={[
        //     {
        //       name: "price",
        //       data: data?.map((price) => price.close),
        //     },
        //   ]}
        //   options={{
        //     theme: {
        //       mode: "dark",
        //     },
        //     chart: {
        //       height: 500,
        //       width: 500,
        //       toolbar: {
        //         show: false,
        //       },
        //       background: "transparent",
        //     },
        //     grid: {
        //       show: true,
        //     },
        //     stroke: {
        //       curve: "smooth",
        //       width: 4,
        //     },
        //     yaxis: {
        //       show: true,
        //       labels: {
        //         formatter: function (val, index) {
        //           return val.toFixed(0);
        //         },
        //       },
        //     },
        //     xaxis: {
        //       labels: {
        //         show: true,
        //       },
        //       type: "datetime",
        //       categories: data?.map((price) => price.time_close),
        //     },
        //     fill: {
        //       type: "gradient",
        //       gradient: {
        //         gradientToColors: ["#0be881"],
        //         stops: [0, 100],
        //       },
        //     },
        //     colors: ["#0fbcf9"],
        //     tooltip: {
        //       y: {
        //         formatter: (value) => `$ ${value.toFixed(3)}`,
        //       },
        //     },
        //   }}
        // />
      }
    </div>
  );
}

export default Chart;
