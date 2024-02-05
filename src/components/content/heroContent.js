import GivingPageHero1 from "../../images/GivingPageHero1.webp"
import GivingPageHero2 from "../../images/GivingPageHero2.webp"
import GivingPageHero3 from "../../images/GivingPageHero3.webp"
import GivingPageIcon1 from "../../images/GivingPageIcon1.webp"
import GivingPageIcon2 from "../../images/GivingPageIcon2.webp"
import GivingPageIcon3 from "../../images/GivingPageIcon3.webp"
import ImageRight1 from "../../images/ImageRight1.webp"
import ImageRight2 from "../../images/ImageRight2.webp"
import ImageRight3 from "../../images/ImageRight3.webp"
import VideoOverLay1 from "../../images/VideoOverLay1.webp"
import VideoOverLay2 from "../../images/VideoOverLay2.webp"
import VideoOverLay3 from "../../images/VideoOverLay3.webp"

const heroData = [
  {
    id: "withVideo",
    headline: "Lorem Ipsum Dolor Sit Amet",
    images: {
      desktop: ImageRight1,
      tablet: ImageRight2,
      mobile: ImageRight3,
    },
    videoOverlay: {
      desktop: VideoOverLay1,
      tablet: VideoOverLay2,
      mobile: VideoOverLay3,
    },
    body: "PrinterLogic’s integration with Nutanix Frame allows mutual customers to easily manage their printing environment in virtualized environments, including VDI and DaaS as well as their physical environment.",
    linkText: "SCHEDULE A DEMO",
  },
  {
    id: "simpleImg",
    headline: "Lorem Ipsum Dolor Sit Amet",
    images: {
      desktop: GivingPageHero1,
      tablet: GivingPageHero2,
      mobile: GivingPageHero3,
    },
    body: "10,000+ global enterprises trust PrinterLogic to eliminate their print servers and deliver a world-class print management experience.",
    linkText: "SCHEDULE A DEMO",
  },
  {
    id: "withIcon",
    headline: "Lorem Ipsum Dolor Sit Amet",
    images: {
      desktop: GivingPageIcon1,
      tablet: GivingPageIcon2,
      mobile: GivingPageIcon3,
    },
    body: "PrinterLogic’s integration with Nutanix Frame allows mutual customers to easily manage their printing environment in virtualized environments, including VDI and DaaS as well as their physical environment. ",
    linkText: "SCHEDULE A DEMO",
  },
]
export const specifiedData = dataName => {
  return heroData.find(item => item.id === dataName)
}
