import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
/**  pages foleridagi hamma componentlar screen comp hisoblamadi. unga boshqa complarni joylayolmaymz chunki u
 * linkga bog'langan holda tashkillanib qoladi
 * screen bo'lmaganlarni tashqaridagi libs/componentni ichiga joylaymiz */
const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default withLayoutMain(Home);
{
  /*withLayoutMainga Homeni pass qildik.  layout containerni o'zgia yutib oladi */
}
