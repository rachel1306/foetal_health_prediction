import React, { useState } from "react";
import "./FormPage.css";

const FormPage = () => {

    const [baseline, setBaseline] = useState("");
    const [accelerations, setAccelerations] = useState("");
    const [fetalMovements, setFetalMovements] = useState("");
    const [uterineContractions, setUterineContractions] = useState("");
    const [lightDecelerations, setLightDecelerations] = useState("");
    const [severeDecelerations, setSevereDecelerations] = useState("");
    const [prolongedDecelerations, setProlongedDecelerations] = useState("");
    const [abnormalShortTermVariability, setAbnormalShortTermVariability] = useState("");
    const [meanValueOfShortTermVariability, setMeanValueOfShortTermVariability] = useState("");
    const [percentageOfTimeWithAbnormalLongTermVariability, setPercentageOfTimeWithAbnormalLongTermVariability] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const newValues = {
        baseline,
        accelerations,
        fetalMovements,
        uterineContractions,
        lightDecelerations,
        severeDecelerations,
        prolongedDecelerations,
        abnormalShortTermVariability,
        meanValueOfShortTermVariability,
        percentageOfTimeWithAbnormalLongTermVariability,
    };

    return (
        <div className="FormPage">

            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Scan Values</h2>

                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="username">Baseline Value</label>
                            <input id="baseline_value" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setBaseline(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Accelerations</label>
                            <input id="accelerations" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setAccelerations(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Fetal Movement</label>
                            <input id="fetal_movements" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setFetalMovements(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Uterine Contractions</label>
                            <input id="uterine_contractions" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setUterineContractions(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Light Decelerations</label>
                            <input id="Light Decelerations" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setLightDecelerations(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Severe Decelerations</label>
                            <input id="Severe Decelerations" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setSevereDecelerations(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Prolonged Decelerations</label>
                            <input id="Prolonged Decelerations" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setProlongedDecelerations(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Abnormal Short Term Variability</label>
                            <input id="abnormal_short_term_variability" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setAbnormalShortTermVariability(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Mean Value Of Short Term Variability</label>
                            <input id="mean_value_of_short_term_variability" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setMeanValueOfShortTermVariability(event.target.value)}
                                required />
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Percentage Of Time With Abnormal Long Term Variability</label>
                            <input id="percentage_of_time_with_abnormal_long_term_variability" type="number" step='0.01' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={(event) => setPercentageOfTimeWithAbnormalLongTermVariability(event.target.value)}
                                required />
                        </div>


                    </div>

                    <div class="flex justify-end mt-6">
                        <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            onClick={onSubmitHandler}>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FormPage;
