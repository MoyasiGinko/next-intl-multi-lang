import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import Link from "next/link";

const LoginComponent = () => {
  return (
    <Box className="flex bs-full justify-center">
      <Box className="flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden">
        <Box className="plb-12 pis-12">
          <img
            src="/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-login-light.png"
            alt="character-illustration"
            className="max-bs-[500px] max-is-full bs-auto"
          />
        </Box>
        <img
          alt="tree-1"
          src="/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-2.png"
          className="absolute inline-start-0 block-end-0"
          height="200"
        />
        <img
          alt="mask"
          src="/materio-mui-nextjs-admin-template/demo-1/images/pages/auth-v2-mask-light.png"
          className="mui-qtv8pw"
        />
      </Box>
      <Box className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        <a className="absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]">
          <Box className="flex items-center min-bs-[24px]">
            <svg
              width="1.2658em"
              height="1em"
              viewBox="0 0 100 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[22px] text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.92008 0.501904L22.662 11.4573C23.614 12.0451 24.1936 13.0844 24.1936 14.2036V64.2521C24.1936 65.3871 23.5976 66.4387 22.6241 67.0214L4.8822 77.6429C3.35344 78.5581 1.37254 78.0602 0.457741 76.5307C0.158194 76.0299 0 75.4572 0 74.8736V3.24818C0 1.46582 1.44424 0.0209274 3.22581 0.0209274C3.82422 0.0209274 4.41085 0.18746 4.92008 0.501904Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 26.1063L24.1936 39.9852V53.5915L0 26.1063Z"
                fill="black"
              ></path>
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 26.1063L24.1936 39.6319V47.9438L0 26.1063Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95.084 0.489601L77.3421 11.4083C76.3878 11.9956 75.8064 13.0362 75.8064 14.1571V64.2526C75.8064 65.3875 76.4024 66.4391 77.3759 67.0219L95.1178 77.6433C96.6466 78.5585 98.6275 78.0606 99.5423 76.5312C99.8418 76.0303 100 75.4576 100 74.874V3.23842C100 1.45605 98.5558 0.0111618 96.7742 0.0111618C96.1774 0.0111618 95.5923 0.176782 95.084 0.489601Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M100 26.1063L75.8064 39.956V54.0023L100 26.1063Z"
                fill="black"
              ></path>
              <path
                opacity="0.077704"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M100 26.1063L75.8064 39.6199V48.3546L100 26.1063Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.91149 0.475694L50 28.123V54.7479L0 26.0986V3.22726C0 1.44489 1.44424 0 3.22581 0C3.8208 0 4.4042 0.164633 4.91149 0.475694Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.91149 0.475694L50 28.123V54.7479L0 26.0986V3.22726C0 1.44489 1.44424 0 3.22581 0C3.8208 0 4.4042 0.164633 4.91149 0.475694Z"
                fill="white"
                fillOpacity="0.15"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95.0885 0.475694L50 28.123V54.7479L100 26.0986V3.22726C100 1.44489 98.5558 0 96.7742 0C96.1792 0 95.5958 0.164633 95.0885 0.475694Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95.0885 0.475694L50 28.123V54.7479L100 26.0986V3.22726C100 1.44489 98.5558 0 96.7742 0C96.1792 0 95.5958 0.164633 95.0885 0.475694Z"
                fill="white"
                fillOpacity="0.3"
              ></path>
            </svg>
            <span className="mui-1gjpvsi">Materio</span>
          </Box>
        </a>
        <Box className="flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]">
          <Box>
            <Typography variant="h4" className="mui-98mxf4">
              Welcome to Materio!👋🏻
            </Typography>
            <Typography className="MuiTypography-body1 mbs-1 mui-4fazuy">
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
          <form noValidate autoComplete="off" className="flex flex-col gap-5">
            <FormControl fullWidth className="mui-oovtfw">
              <InputLabel htmlFor="email" className="mui-1oam9tr">
                Email
              </InputLabel>
              <OutlinedInput
                id="email"
                type="text"
                label="Email"
                className="mui-1b4ne4q"
              />
            </FormControl>
            <FormControl fullWidth className="mui-oovtfw">
              <InputLabel htmlFor="password" className="mui-1oam9tr">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <i className="ri-eye-line"></i>
                    </IconButton>
                  </InputAdornment>
                }
                className="mui-1rvq38j"
              />
            </FormControl>
            <Box className="flex justify-between items-center flex-wrap gap-x-3 gap-y-1">
              <FormControlLabel
                control={<Checkbox className="mui-u3l650" />}
                label="Remember Me"
                className="mui-qfyl7o"
              />
              <a className="text-primary hover:underline text-small">
                Forgot Password?
              </a>
            </Box>
            <Button fullWidth variant="contained" className="mui-1whq4gw">
              Login
            </Button>
            <Box className="flex items-center before:mui-1qsnucj after:mui-1qsnucj">
              <Divider className="mui-1qsnucj">or</Divider>
            </Box>
            <Box className="flex justify-center flex-wrap gap-y-2 gap-x-2">
              <Button
                variant="outlined"
                fullWidth
                className="bs-full sm:bs-auto mui-1l0tze5"
              >
                <Google className="mui-1sdxssf" />
                Google
              </Button>
              <Button
                variant="outlined"
                fullWidth
                className="bs-full sm:bs-auto mui-1l0tze5"
              >
                <GitHub className="mui-1sdxssf" />
                Github
              </Button>
              <Button
                variant="outlined"
                fullWidth
                className="bs-full sm:bs-auto mui-1l0tze5"
              >
                <Twitter className="mui-1sdxssf" />
                Twitter
              </Button>
              <Button
                variant="outlined"
                fullWidth
                className="bs-full sm:bs-auto mui-1l0tze5"
              >
                <Facebook className="mui-1sdxssf" />
                Facebook
              </Button>
            </Box>
            <Box className="text-center">
              <Typography className="mui-1l7ld8h">
                New on our platform?{" "}
                <a className="text-primary hover:underline">
                  Create an account
                </a>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
