///<reference path="../templates/ProductTemplate.ts" />


import ProductTemplate = Project.Templates.ProductTemplate

namespace Project 
{
    export namespace Components 
    {
        export class ProductComponent extends ProductTemplate
        {
            Name = "TV";
            Price =  40000.44;
            Qty = 2;
            Total(){
                return this.Qty * this.Price;
            }
            Print(){
                console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
            }
        }
    }
}