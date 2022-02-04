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
            <h2>Currency Converter</h2>
            <div className="input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="primaryCurrency"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    value={""}
                                    name="primaryCurrencyOption"
                                    className="currency-options"
                                >
                                    {currencies.map(
                                        (currency: string, _index: number) => (
                                            <option key={_index}>
                                                {currency}
                                            </option>
                                        )
                                    )}
                                    ;
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secundary Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="secondaryCurrency"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    value={""}
                                    name="secondaryCurrencyOption"
                                    className="currency-options"
                                >
                                    {currencies.map(
                                        (currency: string, _index: number) => (
                                            <option>{currency}</option>
                                        )
                                    )}
                                    ;
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ExchangeRate />
        </div>
    );
};

export default CurrencyConverter;
