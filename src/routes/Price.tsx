import { useEffect, useState } from "react";
import styled from "styled-components";

const DataList = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ListName = styled.span`
  font-weight: 800;
  font-size: 18px;
`;

const DataColor = styled.span<{ isValue?: Boolean }>`
  color: ${(props) => (props.isValue ? "lightgreen" : "red")};
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  tickersData?: PriceData;
}

const valueCheck = (value: number | undefined) => {
  if (value) {
    return value >= 0;
  }
};

function Price({ tickersData }: PriceProps) {
  const [data, setData] = useState<PriceData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData(tickersData);
    setLoading(false);
  }, [tickersData]);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <DataList>
            <ListName>MarketCap : </ListName>$ {data?.quotes.USD.market_cap}
          </DataList>
          <DataList>
            <ListName>Volume(24h) :</ListName>$ {data?.quotes.USD.volume_24h}
          </DataList>
          <DataList>
            <ListName>Change Rate(1h) :</ListName>
            <DataColor isValue={valueCheck(data?.quotes.USD.percent_change_1h)}>
              {data?.quotes.USD.percent_change_1h}
            </DataColor>
          </DataList>
          <DataList>
            <ListName>Change Rate(24h) :</ListName>
            <DataColor
              isValue={valueCheck(data?.quotes.USD.percent_change_24h)}
            >
              {data?.quotes.USD.percent_change_24h}
            </DataColor>
          </DataList>
          <DataList>
            <ListName>Change Rate(7d) :</ListName>
            <DataColor isValue={valueCheck(data?.quotes.USD.percent_change_7d)}>
              {data?.quotes.USD.percent_change_7d}
            </DataColor>
          </DataList>
        </div>
      )}
    </div>
  );
}

export default Price;
