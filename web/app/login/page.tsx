"use client";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/components/libs/theme2"; 
import { Icon } from "@iconify/react";
import Image from "next/image";
import women from "../../components/assets/images/women.png";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Notification from "@/components/helpers/notification/Notification";
import {
  SignupContainer,
  FormSection,
  FormHeading,
  GoogleBtn,
} from "./Login.styles";

export default function SignupPage() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSignup = async (): Promise<void> => {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        setError(result.error || "Authentication failed");
        setLoading(false);
        return;
      }

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Unexpected error during authentication");
        setLoading(false);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Google login failed";
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
  
    <ThemeProvider theme={darkTheme}>
      <SignupContainer>
        <Image
          src={women}
          alt="women-talking"
          style={{ width: "50%", height: "auto", alignSelf: "end" }}
          priority 
        />

        <FormSection>
          <FormHeading>
            <h1>Continue with Upstat</h1>
            <p>
              Don't have an account?
              <Link href="/signup">&nbsp;Sign up</Link>
            </p>
            {error !== "" && <Notification msg={error} type="error" />}
          </FormHeading>

          <GoogleBtn disabled={loading} onClick={handleSignup}>
            <Icon icon="devicon:google" />
            <span>{loading ? "Connecting..." : "Continue with Google"}</span>
          </GoogleBtn>
        </FormSection>
      </SignupContainer>
    </ThemeProvider>
  );
}