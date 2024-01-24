import React, {PropsWithChildren, useEffect, useState} from 'react';
import ModalLayout from './ModalLayout';
import { useSDK } from '@thirdweb-dev/react';
import { Signer, ethers } from 'ethers';
import {Web3Provider} from '@ethersproject/providers';
import { Repay, Withdraw, borrow, supply } from 'gho-st-sdk';
import { InterestRate } from '@aave/contract-helpers';

type Props = PropsWithChildren<{
  image: string;
  chainName: string;
  value: string;
  percentage: string;
  action: string;
  chainImg?: string;
  chain?: string;
  walletBalance?: string;
  dollarValue: string;
}>;

export function Card({
  image,
  chainName,
  value,
  percentage,
  action,
  chainImg,
  chain,
  walletBalance,
  dollarValue
}: Props) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [amountValue, setAmountValue] = useState('');
  const [client, setClient] = useState<Web3Provider>();
  const [sign, setSign] = useState<Signer>();
  const sdk = useSDK();
  console.log(sdk?.getProvider());
  useEffect(() => {
    if(sdk){
        setClient(sdk?.getProvider())
    }
  },[sdk])

  const handleModal = () => {
    setIsModalVisible(true);
    console.log("hello")
  };

  const callAction = async (action: string) => {
    if (client && client.getSigner()) {
      console.log('hello');
      const signer = await client?.getSigner().getAddress();
      console.log('ended');
      console.log(signer);

      if (action === 'Supply') {
        await supply({
          user: signer,
          reserve: '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5',
          amount: amountValue,
          onBehalfOf: signer,
          provider: client,
          signer: client.getSigner(),
        });
      } else if (action === 'Borrow') {
        await borrow({
          user: signer,
          reserve: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
          amount: amountValue,
          interestRateMode: InterestRate.Variable,
          onBehalfOf: signer,
          provider: client,
          signer: client.getSigner(),
        });
      } else if (action === 'Withdraw') {
        await Withdraw({
          user: signer,
          reserve: '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5',
          amount: amountValue,
          aTokenAddress: '0x3FfAf50D4F4E96eB78f2407c090b72e86eCaed24',
          onBehalfOf: signer,
          provider: client,
          signer: client.getSigner(),
        });
      } else if (action === 'Repay') {
        await Repay({
          user: signer,
          reserve: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
          amount: amountValue,
          interestRateMode: InterestRate.Variable,
          onBehalfOf: signer,
          provider: client,
          signer: client.getSigner(),
        });
      }
      setIsModalVisible(false);
    }
  };

  return (
    <div className='flex w-[500px] h-[60px] bg-[#F2EBE6] justify-between items-center rounded-xl p-3 font-semibold drop-shadow-lg my-5'>
        <img className='h-[40px]' src={image} alt="" />
        <h2>{chainName}</h2>
        <p className="value">{value}</p>
        <p className="percentage">{percentage}%</p>
        <button onClick={()=> handleModal()} className='px-4 py-2 bg-black text-white rounded-2xl'>{action}</button>
        { isModalVisible && (        <ModalLayout
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
        modalTitle={action + ' ' + chainName}>
        <p className='text-[#000] text-[16px] my-3'>Amount</p>
        <div className='border border-[#242426] rounded-xl p-[20px] flex justify-between items-center'>
          <div>
            <input
              className='text-[#000] font-[400] text-[14px]'
              placeholder="Enter amount"
              type='number'
              value={amountValue}
              onChange={text => setAmountValue(text)}
            />

            <p className='text-[#000] font-[400] text-[14px]'>${Number(amountValue)*Number(dollarValue)}</p>
          </div>
          <div className='flex'>
            <div>
              <img src={chainImg} />
              <p>{chain}</p>
            </div>
            <div>
              <p>Wallet balance {walletBalance}</p>
              <p>MAX</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='px-4 bg-black text-white rounded-xl mx-auto'>{action + ' ' + chainName}</button>
        </div>
      </ModalLayout>
        )
}
    </div>
  )
}
