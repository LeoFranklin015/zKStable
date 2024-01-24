import { ThirdwebSDKProvider, useAddress } from "@thirdweb-dev/react";
import { Signer } from "ethers";
import { chain, THIRDWEB_API } from "../lib/constants";

export const Connected = ({
  username,
  signer,
}: {
  username: string;
  signer: Signer;
}) => {
  return (
    <ThirdwebSDKProvider
      signer={signer}
      activeChain={chain}
      clientId={THIRDWEB_API || ""}
    >
      <ConnectedInner username={username} />
    </ThirdwebSDKProvider>
  );
};

const ConnectedInner = ({ username }: { username: string }) => {
  const address = useAddress();
  function truncateAddress(address: string) {
    return address.slice(0, 6) + "..." + address.slice(-4);
  }
  return (
    <div>
      {address && (
        <div>
          <div>Welcome {username} </div>
          <div>{truncateAddress(address)}</div>
        </div>
      )}
    </div>
  );
};
