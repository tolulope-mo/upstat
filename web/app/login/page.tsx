"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import women from "../../components/assets/images/women.png";
import Link from "next/link";
import { useState } from "react";
import Notification from "@/components/helpers/notification/Notification";
import {
  SignupContainer,
  FormHeading,
  FormSection,
  GoogleBtn,
} from "./Login.styles";

export default function LoginPage() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  const handleSignup = async (): Promise<void> => {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      console.log("Redirecting to Google...");

    } catch (err) {

      const errorMessage = err instanceof Error ? err.message : "Google login failed";
      console.error("Google login failed:", err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContainer>
      <Image
        src={women}
        alt="women-talking"
        style={{ width: "50%", height: "auto", alignSelf: "end" }}
        priority 
      />

      <FormSection>
        <FormHeading>
          <h1>Welcome back!</h1>
          <p>
            Don't have an account?
            <Link href="/signup">&nbsp;Signup</Link>
          </p>
          {error !== "" && <Notification msg={error} type="error" />}
        </FormHeading>

        <GoogleBtn disabled={loading} onClick={handleSignup}>
          <Icon icon="devicon:google" />
          <span>{loading ? "Connecting..." : "Continue with Google"}</span>
        </GoogleBtn>
      </FormSection>
    </SignupContainer>
  );
}