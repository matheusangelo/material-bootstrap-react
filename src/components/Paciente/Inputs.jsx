import React, { useContext } from 'react';
import { MDBInput } from 'mdbreact';
import { Context } from './index';

export default function Inputs() {
    let context = useContext(Context);
    return (
        <div>

            <MDBInput
                value={context.input1}
                onChange={(e) => context.setInput1(e.target.value)}
                label={"Raio médio"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input2}
                onChange={(e) => context.setInput2(e.target.value)}
                label={"Textura média"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input3}
                onChange={(e) => context.setInput3(e.target.value)}
                label={"Perimetro médio"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input4}
                onChange={(e) => context.setInput4(e.target.value)}
                label={"Área média"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input5}
                onChange={(e) => context.setInput5(e.target.value)}
                label={"Suavidade Média"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input6}
                onChange={(e) => context.setInput6(e.target.value)}
                label={"Compacidade Média"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input7}
                onChange={(e) => context.setInput7(e.target.value)}
                label={"Concavidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input8}
                onChange={(e) => context.setInput8(e.target.value)}
                label={"Média dos pontos Côncavos"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input9}
                onChange={(e) => context.setInput9(e.target.value)}
                label={"Simetria Média"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input10}
                onChange={(e) => context.setInput10(e.target.value)}
                label={"Dimensão Fractal"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input11}
                onChange={(e) => context.setInput11(e.target.value)}
                label={"Desvio padrão do raio"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input12}
                onChange={(e) => context.setInput12(e.target.value)}
                label={"Desvio padrão da textura"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input13}
                onChange={(e) => context.setInput13(e.target.value)}
                label={"Desvio padrão do perímetro"}
                group3
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input14}
                onChange={(e) => context.setInput14(e.target.value)}
                label={"Desvio padrão da Área"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input15}
                onChange={(e) => context.setInput15(e.target.value)}
                label={"Desvio padrão da Suavidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input16}
                onChange={(e) => context.setInput16(e.target.value)}
                label={"Desvio padrão dos pontos da compacidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input17}
                onChange={(e) => context.setInput17(e.target.value)}
                label={"Desvio padrão da concavidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input18}
                onChange={(e) => context.setInput18(e.target.value)}
                label={"Média dos pontos côncavos"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input19}
                onChange={(e) => context.setInput19(e.target.value)}
                label={"Simetria"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input20}
                onChange={(e) => context.setInput20(e.target.value)}
                label={"Dimensão Fractal"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input21}
                onChange={(e) => context.setInput21(e.target.value)}
                label={"Menor Raio"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input22}
                onChange={(e) => context.setInput22(e.target.value)}
                label={"Menor textura"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input23}
                onChange={(e) => context.setInput23(e.target.value)}
                label={"Menor perímetro"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input24}
                onChange={(e) => context.setInput24(e.target.value)}
                label={"Menor área"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input25}
                onChange={(e) => context.setInput25(e.target.value)}
                label={"Menor suavidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input26}
                onChange={(e) => context.setInput26(e.target.value)}
                label={"Menor compacidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input27}
                onChange={(e) => context.setInput27(e.target.value)}
                label={"Menor concavidade"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input28}
                onChange={(e) => context.setInput28(e.target.value)}
                label={"Média dos menores pontos côncavos"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input29}
                onChange={(e) => context.setInput29(e.target.value)}
                label={"Menor simetria"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

            <MDBInput
                value={context.input30}
                onChange={(e) => context.setInput30(e.target.value)}
                label={"Menor dimensão factral"}
                group
                type="number"
                validate
                error="wrong"
                success="right"
                containerClass="text-left"
            />

        </div>
    )
}
