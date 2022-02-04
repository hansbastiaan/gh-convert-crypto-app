import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
const CurrencyConverter = () => {
    const currencies = ["BTC", "ETH", "XRP", "LTC", "ADA", "EUR", "USD"];

    // BTC = Bitcoins
    // ETH = Ethereum
    // XRP = XRP
    // LTC = Lattice Token
    // ADA = Cardano
    // EUR = EURO

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] =
        useState("BTC");

    return (
        <div className="currency-converter">
            {/* primary currency converter amount */}
            <div className="input-box">
                <div className="amount-primary-currency">
                    <input
                        type="number"
                        name="primaryCurrencyAmount"
                        value={""}
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
