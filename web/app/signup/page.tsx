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
} from "./Signup.styles";

export default function SignupPage() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


 const handleSignup = async (): Promise<void> => {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      // TODO: implement Google Auth once Envoy is set up
      console.log("Redirecting to Google...");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Google signup failed";
      console.error("Google signup failed:", err);
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
          <h1>Sign up with Upstat</h1>
          <p>
            Have an account?
            <Link href="/login">&nbsp;Login</Link>
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