import { ColorOrigin } from "./colorOrigin.model"
import { ConnectionOrigin } from "./connectionOrigin.model"
import { ModelOrigin } from "./modelOrigin.model"

type SetComponentProps = {
    models: ModelOrigin[]
    colors: ColorOrigin[]
    connections: ConnectionOrigin[]
}

export type { SetComponentProps }