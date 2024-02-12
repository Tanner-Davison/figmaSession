import React from "react"

import IphoneCTA from "../components/IphoneCTA"
import Testing from "../components/Testing"

export const componentToRender = (path, content) => {
  console.log(path, content)
  switch (path) {
    case "IphonePageData.js":
      return <IphoneCTA content={content} />
    case "dojo-coffee-house.md":
      return <Testing content={content} />
  }
}

