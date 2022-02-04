import { useState } from "react";
import axios from "axios";

import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
    const currencies = ["BTC", "ETH", "XRP", "LTC", "ADA", "EUR", "USD"];

    // BTC = Bitcoins
    // ETH = Ethereum
    // XRP = XRP
    // LTC = Lattice Token
    // ADA = Cardano
    // EUR = EURO
    // USD = US Dollar

    // Rapid API = Alpha Vantage = Convert Crypto Currency
    // URL: https://rapidapi.com/alphavantage/api/alpha-vantage
    // endpoints: CURRENCY_EXCHANGE_RATE

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] =
        useState("BTC");
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExhangeRate] = useState(0);
    const [result, setResult] = useState(0);

    const convert = () => {
        const options = {
            method: "GET",
            url: "https://alpha-vantage.p.rapidapi.com/query",
            params: {
                from_currency: chosenPrimaryCurrency,
                function: "CURRENCY_EXCHANGE_RATE",
                to_currency: chosenSecondaryCurrency,
            },
            headers: {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key":
                    "7c7dac56bbmsha38e82705eb9295p1552a6jsn8b548d23d848",
            },
        };

        axios
            .request(options)
            .then((response) => {
                setExhangeRate(
                    response.data["Realtime Currency Exchange Rate"][
                        "5. Exchange Rate"
                    ]
                );
                setResult(
                    response.data["Realtime Currency Exchange Rate"][
                        "5. Exchange Rate"
                    ] * amount
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };
    console.log(exchangeRate);

    return (
        <div className="currency-converter">
            {/* primary currency converter amount */}
            <div className="input-box">
                <div className="amount-primary-currency">
                    <input
                        type="number"
                        name="primaryCurrencyAmount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="input-crypto">
                    <select
                        value={chosenPrimaryCurrency}
                        name="primaryCurrencyOption"
                        className="currency-options"
                        onChange={(e) =>
                            setChosenPrimaryCurrency(e.target.value)
                        }
                    >
                        {currencies.map((currency: string, _index: number) => (
                            <option>{currency}</option>
                        ))}
                        ;
                    </select>
                </div>
            </div>

            {/* secundary currency converter amount */}
            <div className="input-box">
                <div className="amount-secondary-currency">
                    <input
                        type="number"
                        name="secondaryCurrencyAmount"
                        value={result}
                        disabled={true}
                    />
                </div>
                <div className="input-crypto">
                    <select
                        value={chosenSecondaryCurrency}
                        name="secondaryCurrencyOption"
                        className="currency-options"
                        onChange={(e) =>
                            setChosenSecondaryCurrency(e.target.value)
                        }
                    >
                        {currencies.map((currency: string, _index: number) => (
                            <option>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button id="convert-button" onClick={convert}>
                Convert
            </button>
        </div>
    );
};
export default CurrencyConverter;
