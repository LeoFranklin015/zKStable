import React, { PropsWithChildren } from 'react'

type ModalLayoutProps = PropsWithChildren<{
    modalVisible?: any;
    setModalVisible?: any;
    children: ReactNode;
    modalTitle: String;
    halfMargin?: Boolean;
  }>;
  
  function ModalLayout({
    children,
    modalVisible,
    setModalVisible,
    modalTitle,
  }: ModalLayoutProps) {
  return (
    <div className={`${!modalVisible && "hidden"} z-[100] absolute bottom-[100px] left-[200px]`}>
        <div className="flex-1 justify-center bg-opacity-50 bg-black p-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{modalTitle}</p>
            <button onClick={() => setModalVisible(false)}>
              <p className="text-lg text-white px-4 bg-black">X</p>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalLayout