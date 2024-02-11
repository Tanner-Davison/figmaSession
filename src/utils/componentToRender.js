import React from "react"

import IphoneCTA from "../components/IphoneCTA";

export const componentToRender = (param, content) => {
    console.log(param , content)
  switch (param) {
    case 'Gatsby Default Starter':
      return <IphoneCTA content={content} />
  }
}
