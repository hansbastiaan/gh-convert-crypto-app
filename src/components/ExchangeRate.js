import { useEffect, useState } from "react";
import axios from "axios";

const ExchangeRate = ({
    exchangeRate,
    chosenPrimaryCurrency,
    chosenSecondaryCurrency,
}) => {
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <h1>{exchangeRate}</h1>
            <p>
                {chosenPrimaryCurrency} to {chosenSecondaryCurrency}
            </p>
        </div>
    );
};

export default ExchangeRate;
