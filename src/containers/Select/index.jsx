import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function Select({ onChange, value = "BTC" }) {
  const data = [{
    name: 'BTC',
    code: 'BTC',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'
  }, {
    name: 'SOL',
    code: 'SOL',
    icon: 'data:image/jpeg;base64,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'
  }, {
    name: 'ETH',
    code: 'ETH',
    icon: 'data:image/png;base64,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'
  }];

  // find initial coin
  const initialCoin = data.find(({ code }) => code === value);

  const [valueSelected, setValueSelected] = useState(initialCoin);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeHandler = (item) => {
    setValueSelected(item);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange(item);
    }
  };

  return (
    <div className="relative">

        <div className="border border-primary cursor-pointer rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='w-[26px] pr-2'>
            <img src={valueSelected.icon} alt={valueSelected.name} className="flex items-center" />
          </div>
          <span className='inline-block mr-2'>{valueSelected.name}</span>
          <BsChevronDown />
        </div>

        <div className={classNames('absolute top-full right-0 left-0 bg-white z-[2] mt-4 rounded-xl shadow-xl border border-primary overflow-hidden', {
          'invisible opacity-0': !isOpen,
          'visible opacity-100': isOpen
        })}>
          <div>
            {data.map((coin, i) =>
              <div key={i} className={classNames('py-2 flex items-center cursor-pointer hover:text-white select-none px-4 hover:bg-primary', {
                'bg-primary text-white': coin.name === valueSelected.name
              })} onClick={() => onChangeHandler(coin)}>
                <div className='h-[26px] aspect-square pr-2'>
                  <img src={coin.icon} alt={coin.name} className="flex items-center" />
                </div>
                <span className='inline-block mr-2'>{coin.name}</span>
              </div>
            )}
          </div>
        </div>

    </div >
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
