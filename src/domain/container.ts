import Base from "./base";
import Item from "./item";
import { Type } from 'class-transformer';

export default class Container extends Base
{
    @Type(() => Base, {
        discriminator: {
            property: "type",
            subTypes: [
                { value: Item, name: "item" },
                { value: Container, name: "container" }
            ]
        }
    })
    children: Array<Item | Container> = []
}