import { useState } from "react";

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
                        value={""}
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
        </div>
    );
};
export default CurrencyConverter;
