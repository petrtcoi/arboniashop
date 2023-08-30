import React, { useState, useEffect, useContext } from "react"

import { Box, IconButton, Button, Typography } from "@mui/material"
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined"
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined"

import { ShoppingCartContext } from "../../contexts/shoppingCartContext"

import { ModelOrigin } from "../../models/modelOrigin.model"

type AddToCartButtonProps = {
  model: ModelOrigin
  colorId: string
  connectionId: string
  sectionQnty: number
  qnty: number
  buttonType?: "text" | "contained" | "outlined"
  buttonSize?: "small" | "medium" | "large"
  buttonColor?: "primary" | "success" | "dark"
  align?: "left" | "center" | "right"
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  model,
  colorId,
  connectionId,
  sectionQnty,
  qnty = 1,
  buttonSize = "small",
  buttonColor = "success",
  buttonType = "contained",
  align = "left",
}) => {
  const shoppingCartContext = useContext(ShoppingCartContext)

  const [itemsInCart, setItemsInCart] = useState<number>(0)
  useEffect(() => {
    const itemIndex = shoppingCartContext.state.items.findIndex(
      item =>
        item.modelId === model.id &&
        item.colorId === colorId &&
        item.connectionId === connectionId &&
        item.sectionQnty === sectionQnty
    )
    if (itemIndex !== -1)
      setItemsInCart(shoppingCartContext.state.items[itemIndex].qnty)
    if (itemIndex === -1) setItemsInCart(0)
  }, [
    shoppingCartContext.state.items,
    colorId,
    connectionId,
    sectionQnty,
    model,
  ])

  const mainColor = buttonColor === "dark" ? "#333333" : ""

  return (
    <Box
      textAlign={align}
      minWidth={"100px"}
    >
      <Button
        color={buttonColor === "dark" ? "primary" : buttonColor}
        sx={{ color: mainColor, fontWeight: 200 }}
        variant={buttonType}
        style={{ justifyContent: "flex-start" }}
        size={buttonSize}
        startIcon={
          <ShoppingBasketOutlinedIcon
            style={{ color: buttonColor === "dark" ? "#000" : "" }}
          />
        }
        onClick={() =>
          shoppingCartContext.dispatch({
            type: "ADD_ITEM",
            value: {
              modelId: model.id,
              colorId,
              connectionId,
              sectionQnty,
              qnty,
            },
          })
        }
      >
        <span
          style={{
            color: buttonColor === "dark" ? "#000" : "",
            fontWeight: 400,
          }}
        >
          {itemsInCart > 0 ? itemsInCart : "Купить"}
        </span>
      </Button>

      {itemsInCart > 0 && (
        <IconButton
          size={buttonSize}
          onClick={() =>
            shoppingCartContext.dispatch({
              type: "REMOVE_ITEM",
              value: {
                modelId: model.id,
                colorId,
                connectionId,
                sectionQnty,
              },
            })
          }
        >
          <RemoveCircleOutlineOutlinedIcon
            color="secondary"
            sx={{ color: mainColor }}
          />
        </IconButton>
      )}
    </Box>
  )
}

export default AddToCartButton
