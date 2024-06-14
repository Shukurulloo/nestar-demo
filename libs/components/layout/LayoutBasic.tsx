import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const withLayoutBasic = (Component: any) => {
  // boshqa pagelar uchun, qayerda layout bo'lsa o'shani chaqiramz
  return (props: any) => {
    const device = useDeviceDetect();

    if (device == "mobile") {
      return (
        <>
          <Head>
            <title>Nestar</title>
          </Head>
          <Stack id="mobile-wrap">
            <Stack id={"top"}>
              <Top />
            </Stack>

            <Stack id={"main"}>
              <Component {...props} /> {/* bu homePagedan kelgan container */}
            </Stack>

            <Stack id={"footer"}>
              <Footer />
            </Stack>
          </Stack>
        </>
      );
    } else {
      return (
        <>
          <Head>
            <title>Nestar</title>
          </Head>

          <Stack id="pc-wrap">
            <Stack id="top">
              <Top />
            </Stack>

            <Stack
              className={"header-basic"}
              style={{
                backgroundImage: `url(/img/banner/properties.png)`,
                backgroundSize: "cover",
                boxShadow: "inset 10px 40px 150px 40px rgb()24 22 36",
              }}
            >
              <Stack className={"container"}>
                <strong>Search</strong>
                <span>We are glad to see you again!</span>
              </Stack>
            </Stack>

            <Stack id={"main"}>
              <Component {...props} />{" "}
              {/* bu propertyPagedan kelgan container yani undagi jami datalar */}
            </Stack>

            <Stack id={"footer"}>
              <Footer />
            </Stack>
          </Stack>
        </>
      );
    }
  };
};

export default withLayoutBasic;
