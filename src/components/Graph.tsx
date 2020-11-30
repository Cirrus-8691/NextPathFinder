import styles from "../../styles/Home.module.css"
import React, { useEffect, useRef } from "react";

export interface GVertex {
    x : number, 
    y : number
}
export interface GEdge {
    id1 : number,
    v1 : GVertex, 
    id2 : number, 
    v2 : GVertex,
    m1 : number, 
    m2 : number
}
export interface GraphProps {
    verticesFromTo : number[],
    metrics : string[],

    vertices : GVertex[],
    edges : GEdge[]
}
/**
 * Graph component
 * @param props
 */
export default function Graph(props : Readonly<GraphProps>) {
    //console.log("Layout");

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const graphView : GraphDrawer = new GraphDrawer(context);
        graphView.draw(props);
      }, []);
    
    return  <div className={styles.graph}>
                In graph :<br/>
                <br/>
                <canvas ref={canvasRef} width="400" height="400" >
                </canvas>
            </div>
}
/**
 * Draw Graph in canvas context
 */
class GraphDrawer {

    private context : any;
    private verticesFromTo : number[];
    private metrics : string[];

    private readonly radius : number = 30;
    private readonly dx : number = 40;
    private readonly dy : number = 40;
    private readonly space : number = 150;

    constructor(ctx : any) {
        this.context = ctx;
    }

    draw = (props : Readonly<GraphProps>) => {
        this.verticesFromTo = props.verticesFromTo;
        this.metrics = props.metrics;

        this.context.font = '16px sans serif';
        let id = 0;
        props.vertices.forEach( (vertex) => this.drawVertex( id++, vertex ) );
        props.edges.forEach( (edge) => this.drawEdge( edge ) );
    }
    edgeExistsBetween = (id1 : number,id2 : number) => {
        let ok = true;
        if(id2>=0) {
            const index1 = this.verticesFromTo.indexOf(id1,0);
            const index2 = this.verticesFromTo.indexOf(id2,0);
            ok = Math.abs(index1 - index2) === 1;
        }
        return ok;
    }
    useColor = (id1 : number,id2 : number) => {
        if( this.verticesFromTo.length>0
            && this.verticesFromTo.includes(id1)
            && this.edgeExistsBetween(id1, id2)
        ) {
            this.context.fillStyle = 'green';
        } 
        else {
            this.context.fillStyle = 'rgb(25, 127, 224)';
        }
        this.context.strokeStyle = this.context.fillStyle;
    }
    drawVertex = (id : number, vertex : GVertex) => {
        this.context.beginPath();
        this.useColor(id , -1);
        this.context.arc( vertex.x * this.space + this.dx, vertex.y * this.space + this.dy, this.radius, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.fillStyle = 'black';
        this.context.beginPath();
        this.context.arc( vertex.x * this.space + this.dx, vertex.y * this.space + this.dy, this.radius, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.fillText(id, vertex.x * this.space + this.dx -5, vertex.y * this.space + this.dy +5 );
    }
    drawEdge = (edge : GEdge) => {
        this.useColor(edge.id1 , edge.id2);
        this.context.beginPath();
        this.context.lineWidth = 2;
        if(edge.v1.y===edge.v2.y) {
            // horizontal edge
            this.context.moveTo(edge.v1.x * this.space + this.dx + this.radius, edge.v1.y * this.space + this.dy);
            this.context.lineTo(edge.v2.x * this.space + this.dx - this.radius, edge.v2.y * this.space + this.dy);
            this.context.fillText(edge.m1 + this.metrics[0], edge.v1.x * this.space + 2 * this.radius + 16, edge.v1.y * this.space + this.dy -2 );
            this.context.fillText(edge.m2 + this.metrics[1], edge.v1.x * this.space + 2 * this.radius + 16, edge.v1.y * this.space + this.dy + 16 );
        } 
        else {
            // vertical edge
            this.context.moveTo(edge.v1.x * this.space + this.dx , edge.v1.y * this.space + this.dy + this.radius);
            this.context.lineTo(edge.v2.x * this.space + this.dx , edge.v2.y * this.space + this.dy - this.radius);
            this.context.fillText(edge.m1 + this.metrics[0], edge.v1.x * this.space + this.dx + 2, edge.v1.y * this.space + this.dy + this.space / 2 );
            this.context.fillText(edge.m2 + this.metrics[1], edge.v1.x * this.space + this.dx + 2, edge.v1.y * this.space + this.dy + this.space / 2 + 16 );
        }
        this.context.stroke();
    }
}