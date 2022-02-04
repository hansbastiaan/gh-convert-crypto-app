import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
    const currencies = ["BTC", "ETH", "XRP", "LTC", "ADA", "EUR", "USD"];

    // BTC = Bitcoins
    // ETH = Ethereum
    // XRP = XRP
    // LTC = Lattice Token
    // ADA = Cardano
    // EUR = EURO

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
                        value={""}
                        name="primaryCurrencyOption"
                        className="currency-options"
                    >
                        {currencies.map((currency: string, _index: number) => (
                            <option>{currency}</option>
                        ))}
                        ;
                    </select>
                </div>
            </div>

            {/* secumdary currency converter amount */}
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
                        value={""}
                        name="secondaryCurrencyOption"
                        className="currency-options"
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
