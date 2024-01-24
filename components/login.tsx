/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { connectToSmartWallet } from "../lib/wallet";
import { Connected } from "../components/connected";

import { Signer } from "ethers";

type LoginProps = {
  isOpen: boolean;
  onClose(): void;
};
export const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signer, setSigner] = useState<Signer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const connectwallet = async () => {
    if (!username || !password) return;

    try {
      setIsLoading(true);
      const wallet = await connectToSmartWallet(
        username,
        password,
        (status: string) => setLoadingStatus(status)
      );

      const s = await wallet.getSigner();
      setSigner(s);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setError((error as any).message);
    }
  };
  return username && signer ? (
    <Connected username={username} signer={signer} />
  ) : isLoading ? (
    <div>
      <div>
        <div>{loadingStatus}</div>
      </div>
    </div>
  ) : error ? (
    <>
      <div>Error</div>

      <button onClick={() => setError("")}>Try Again</button>
    </>
  ) : (
    <>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => connectwallet()}>Login</button>
      </div>
    </>
  );
};
