// import React from 'react'
import Tips_calculator_output_data from './Tips_calculator_output_data';
import { ButtonCalc } from './syles/Calc-button-styled';
import '@fontsource/space-mono'; // Defaults to weight 400
import '@fontsource/space-mono/400.css'; // Specify weight
import { useEffect, useState } from 'react';

function Tips_calculator_input_data() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [calculateTip, setCalculateTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [customTip, setCustomTip] = useState('custom');

  useEffect(() => {
    if (people > 0 && bill > 0 && tip > 0) {
      setCalculateTip((bill * tip) / 100 / people);
      setTotal(calculateTip + bill);
    }
  }, [bill, people, tip, calculateTip]);

  const handleCustomTip = (e) => {
    setCustomTip(+e.target.value);
  };

  const handleSelectTip = (e) => {
    setTip(+e.target.value);
  };

  const reset = () => {
    setBill('');
    setPeople('');
    setTip('');
    setCalculateTip(0);
    setCustomTip(0);
    setTotal(0);
  };

  return (
    <div className="max-w-7xl	 bg-white rounded-t-3xl p-10 lg:w-3/4 md:mx-auto md:rounded-3xl">
      <div className="md:flex md:flex-columns ">
        <div className="md:w-1/2 md:pr-10">
          <div
            className="text-base font-bold text-garkGrey
"
          >
            B i l l
          </div>
          <div className="flex flex-column justify-between bg-displayCalc mt-3 mb-10 text-darkGreen text-base p-4 pl-5 pr-5  ">
            <p>
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="17"
              >
                <path
                  fill="#9EBBBD"
                  d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                />
              </svg>
            </p>
            <input
              type="number"
              className="text-2xl font-bold w-full text-right"
              onInput={(e) => {
                setBill(+e.target.value);
              }}
              value={bill}
            />

            {/* <p className="text-2xl font-bold">142.55</p> */}
          </div>
          <div>
            <p className="text-base font-bold text-garkGrey mt-3 mb-3">
              Select Tip %
            </p>
            <div className="grid grid-cols-2 grid-flow-row-3 gap-4 mb-8 md:grid-cols-3 md:grid-rows-2">
              <ButtonCalc
                onInput={handleSelectTip}
                className="bg-darkGreen text-white "
              >
                <label>
                  {' '}
                  <input
                    type="radio"
                    value={5}
                    className="opacity-0 absolute inset-0"
                  />
                  5%
                </label>
              </ButtonCalc>
              <ButtonCalc
                onInput={handleSelectTip}
                className="bg-darkGreen  text-white"
              >
                <label>
                  {' '}
                  <input
                    type="radio"
                    value={10}
                    className="opacity-0 absolute inset-0"
                  />
                  10%
                </label>
              </ButtonCalc>
              <ButtonCalc
                onInput={handleSelectTip}
                className="bg-greenBtn text-darkGreen"
              >
                <label>
                  {' '}
                  <input
                    type="radio"
                    value={15}
                    className="opacity-0 absolute inset-0"
                  />
                  15%
                </label>
              </ButtonCalc>
              <ButtonCalc
                onInput={handleSelectTip}
                className="bg-darkGreen  text-white"
              >
                <label>
                  {' '}
                  <input
                    type="radio"
                    value={25}
                    className="opacity-0 absolute inset-0"
                  />
                  25%
                </label>
              </ButtonCalc>
              <ButtonCalc
                onInput={handleSelectTip}
                className="bg-darkGreen  text-white"
              >
                <label>
                  {' '}
                  <input
                    type="radio"
                    value={50}
                    className="opacity-0 absolute inset-0"
                  />
                  50%
                </label>
              </ButtonCalc>
              <ButtonCalc
                onInput={handleSelectTip}
                className="bg-displayCalc text-blackGreen"
              >
                <p>
                  {' '}
                  <input
                    onInput={handleCustomTip}
                    type="radio"
                    // value={customTip}

                    className="opacity-0 absolute inset-0"
                  />
                  {customTip}
                </p>
              </ButtonCalc>
            </div>
          </div>
          <div className="text-base font-bold text-garkGrey mt-8 mb-8">
            <p className=" mb-2">Number of People</p>
            <div className="flex flex-column justify-between bg-displayCalc text-2xl p-4 pl-5 pr-5  ">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
                  <path
                    fill="#9EBBBD"
                    d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                  />
                </svg>
              </p>
              <input
                type="number"
                className="text-right"
                onInput={(e) => {
                  setPeople(+e.target.value);
                }}
                value={people}
              />
              {/* <p>5</p> */}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 ">
          <Tips_calculator_output_data
            total={total}
            calculateTip={calculateTip}
            people={people}
            bill={bill}
            reset={reset}
          ></Tips_calculator_output_data>
        </div>
      </div>
    </div>
  );
}

export default Tips_calculator_input_data;
