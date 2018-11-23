import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';

describe('The javascript parser', () => {
    it('is parsing an empty function correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('')),
            '{"type":"Program","body":[],"sourceType":"script","loc":{"start":{"line":0,"column":0},"end":{"line":0,"column":0}}}'
        );
    });

    it('is parsing a simple variable declaration correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a = 1;')),
            '{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}},"init":{"type":"Literal","value":1,"raw":"1","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":9}}}],"kind":"let","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}'
        );
    });
});
describe('The javascript parser', () => {

    it('is parsing a simple variable declaration correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('let a;')),
            '{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}},"init":null,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}}],"kind":"let","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":6}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":6}}}'
        );
    });

    it('is parsing a complex condition do while loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('do{' +
              'x=x-5;' +
              '}while(x>2)')),
            '{"type":"Program","body":[{"type":"DoWhileStatement","body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"right":{"type":"BinaryExpression","operator":"-","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":9}}}],"loc":{"start":{"line":1,"column":2},"end":{"line":1,"column":10}}},"test":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":17}}},"right":{"type":"Literal","value":2,"raw":"2","loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":19}}},"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":19}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":20}}}'
        );
    });
});
describe('The javascript parser', () => {

    it('is parsing a simple condition do while loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('do{' +
        'x=x-5;' +
        '}while(x)')),
            '{"type":"Program","body":[{"type":"DoWhileStatement","body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"right":{"type":"BinaryExpression","operator":"-","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":9}}}],"loc":{"start":{"line":1,"column":2},"end":{"line":1,"column":10}}},"test":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":17}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}'
        );
    });
    it('is parsing a complex condition while loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('while(x>1){' +
        'x=5;}')),
            '{"type":"Program","body":[{"type":"WhileStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":7}}},"right":{"type":"Literal","value":1,"raw":"1","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":9}}},"body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":12}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":13},"end":{"line":1,"column":14}}},"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":14}}},"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":15}}}],"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":16}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":16}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":16}}}'
        );
    });
});
describe('The javascript parser', () => {

    it('is parsing a simple condition while loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('while(x){' +
        'x=5;}')),
            '{"type":"Program","body":[{"type":"WhileStatement","test":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":7}}},"body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":10}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":12}}},"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":12}}},"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":13}}}],"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":14}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":14}}}'
        );
    });
    it('is parsing an increment expression correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('i++;')),
            '{"type":"Program","body":[{"type":"ExpressionStatement","expression":{"type":"UpdateExpression","operator":"++","argument":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":1}}},"prefix":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":3}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":4}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":4}}}'
        );
    });
});
describe('The javascript parser', () => {

    it('is parsing a complex condition if statement correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('if(x>1){x=5}')),
            '{"type":"Program","body":[{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"right":{"type":"Literal","value":1,"raw":"1","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":6}}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":11}}},"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":11}}},"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":11}}}],"loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":12}}},"alternate":null,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":12}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":12}}}'
        );
    });
    it('is parsing a simple condition if statement correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('if(x){x=5}')),
            '{"type":"Program","body":[{"type":"IfStatement","test":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":7}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":9}}}],"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":10}}},"alternate":null,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a function declaration correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function fibbonaci(a){}')),
            '{"type":"Program","body":[{"type":"FunctionDeclaration","id":{"type":"Identifier","name":"fibbonaci","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":18}}},"params":[{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":20}}}],"body":{"type":"BlockStatement","body":[],"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":23}}},"generator":false,"expression":false,"async":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":23}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":23}}}'
        );
    });
    it('is parsing an assignment correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('y = x - 6;')),
            '{"type":"Program","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"y","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":1}}},"right":{"type":"BinaryExpression","operator":"-","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}},"right":{"type":"Literal","value":6,"raw":"6","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}'
        );
    });
    it('is parsing a complex condition for loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('for(i=0;i<5+k;i++){a=5+i;}')),
            '{"type":"Program","body":[{"type":"ForStatement","init":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}},"right":{"type":"Literal","value":0,"raw":"0","loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":7}}},"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":7}}},"test":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":11}}},"right":{"type":"Identifier","name":"k","loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":13}}},"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":13}}},"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":13}}},"update":{"type":"UpdateExpression","operator":"++","argument":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":15}}},"prefix":false,"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":17}}},"body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":20}}},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":22}}},"right":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":24}}},"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":24}}},"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":24}}},"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":25}}}],"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":26}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":26}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":26}}}'
        );
    });
});

describe('The javascript parser', () => {
    it('is parsing a simple condition for loop correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('for(i=0;x;i++){a=5+i;}')),
            '{"type":"Program","body":[{"type":"ForStatement","init":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":5}}},"right":{"type":"Literal","value":0,"raw":"0","loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":7}}},"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":7}}},"test":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"update":{"type":"UpdateExpression","operator":"++","argument":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":11}}},"prefix":false,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":13}}},"body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":16}}},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":18}}},"right":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":20}}},"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":20}}},"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":20}}},"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":21}}}],"loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":22}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":22}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":22}}}'
        );
    });
    it('is parsing an else if statement correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('if(x>1){a=6} else if(x>8){a=7}')),
            '{"type":"Program","body":[{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"right":{"type":"Literal","value":1,"raw":"1","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":6}}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":9}}},"right":{"type":"Literal","value":6,"raw":"6","loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":11}}},"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":11}}},"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":11}}}],"loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":12}}},"alternate":{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":22}}},"right":{"type":"Literal","value":8,"raw":"8","loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":24}}},"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":24}}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":27}}},"right":{"type":"Literal","value":7,"raw":"7","loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":29}}},"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":29}}},"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":29}}}],"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":30}}},"alternate":null,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":30}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":30}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":30}}}'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a single return statement correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function testing(){return 5;}')),
            '{"type":"Program","body":[{"type":"FunctionDeclaration","id":{"type":"Identifier","name":"testing","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":16}}},"params":[],"body":{"type":"BlockStatement","body":[{"type":"ReturnStatement","argument":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":27}}},"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":28}}}],"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":29}}},"generator":false,"expression":false,"async":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":29}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":29}}}'
        );
    });
    it('is parsing a binary return statement correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function testing(){return n-5;}')),
            '{"type":"Program","body":[{"type":"FunctionDeclaration","id":{"type":"Identifier","name":"testing","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":16}}},"params":[],"body":{"type":"BlockStatement","body":[{"type":"ReturnStatement","argument":{"type":"BinaryExpression","operator":"-","left":{"type":"Identifier","name":"n","loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":27}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":29}}},"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":29}}},"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":30}}}],"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":31}}},"generator":false,"expression":false,"async":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":31}}}'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a member expression correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('x[i]=7+k;')),
            '{"type":"Program","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"MemberExpression","computed":true,"object":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":1}}},"property":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":2},"end":{"line":1,"column":3}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":4}}},"right":{"type":"BinaryExpression","operator":"+","left":{"type":"Literal","value":7,"raw":"7","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"right":{"type":"Identifier","name":"k","loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":9}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":9}}}'
        );
    });
    it('is parsing an if statement with member expression correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('if(x>a[i]){y=7;}')),
            '{"type":"Program","body":[{"type":"IfStatement","test":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"right":{"type":"MemberExpression","computed":true,"object":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"property":{"type":"Identifier","name":"i","loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":8}}},"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":9}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":9}}},"consequent":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"y","loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":12}}},"right":{"type":"Literal","value":7,"raw":"7","loc":{"start":{"line":1,"column":13},"end":{"line":1,"column":14}}},"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":14}}},"loc":{"start":{"line":1,"column":11},"end":{"line":1,"column":15}}}],"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":16}}},"alternate":null,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":16}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":16}}}'
        );
    });
});
describe('The javascript parser', () => {

    it('is parsing an unary expression correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('x=!y;')),
            '{"type":"Program","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":1}}},"right":{"type":"UnaryExpression","operator":"!","argument":{"type":"Identifier","name":"y","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"prefix":true,"loc":{"start":{"line":1,"column":2},"end":{"line":1,"column":4}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":4}}},"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":5}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":5}}}'
        );
    });
    it('is parsing a function call with params correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function binarySearch(X, V, n){x = getData(X,V);}')),
            '{"type":"Program","body":[{"type":"FunctionDeclaration","id":{"type":"Identifier","name":"binarySearch","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":21}}},"params":[{"type":"Identifier","name":"X","loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":23}}},{"type":"Identifier","name":"V","loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":26}}},{"type":"Identifier","name":"n","loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":29}}}],"body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":32}}},"right":{"type":"CallExpression","callee":{"type":"Identifier","name":"getData","loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":42}}},"arguments":[{"type":"Identifier","name":"X","loc":{"start":{"line":1,"column":43},"end":{"line":1,"column":44}}},{"type":"Identifier","name":"V","loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":46}}}],"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":47}}},"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":47}}},"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":48}}}],"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"generator":false,"expression":false,"async":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":49}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":49}}}'
        );
    });
});
describe('The javascript parser', () => {
    it('is parsing a function call without params correctly', () => {
        assert.equal(JSON.stringify(parseCode('function binarySearch(X, V, n){x = getData();}')),
            '{"type":"Program","body":[{"type":"FunctionDeclaration","id":{"type":"Identifier","name":"binarySearch","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":21}}},"params":[{"type":"Identifier","name":"X","loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":23}}},{"type":"Identifier","name":"V","loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":26}}},{"type":"Identifier","name":"n","loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":29}}}],"body":{"type":"BlockStatement","body":[{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":32}}},"right":{"type":"CallExpression","callee":{"type":"Identifier","name":"getData","loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":42}}},"arguments":[],"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":44}}},"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":44}}},"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":45}}}],"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":46}}},"generator":false,"expression":false,"async":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":46}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":46}}}'
        );
    });
    it('is parsing if else correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('function a(){if(x)y=5;else return 5};')),
            '{"type":"Program","body":[{"type":"FunctionDeclaration","id":{"type":"Identifier","name":"a","loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":10}}},"params":[],"body":{"type":"BlockStatement","body":[{"type":"IfStatement","test":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":17}}},"consequent":{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"y","loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":19}}},"right":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":21}}},"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":21}}},"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":22}}},"alternate":{"type":"ReturnStatement","argument":{"type":"Literal","value":5,"raw":"5","loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":35}}},"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":35}}},"loc":{"start":{"line":1,"column":13},"end":{"line":1,"column":35}}}],"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":36}}},"generator":false,"expression":false,"async":false,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":36}}},{"type":"EmptyStatement","loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":37}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":37}}}'
        );
    });
    it('is parsing logical expression if condition correctly', () => {
        assert.equal(
            JSON.stringify(parseCode('if(x>6 || y < 9)\n' +
              'x=6;')),
            '{"type":"Program","body":[{"type":"IfStatement","test":{"type":"LogicalExpression","operator":"||","left":{"type":"BinaryExpression","operator":">","left":{"type":"Identifier","name":"x","loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":4}}},"right":{"type":"Literal","value":6,"raw":"6","loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":6}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":6}}},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"y","loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":11}}},"right":{"type":"Literal","value":9,"raw":"9","loc":{"start":{"line":1,"column":14},"end":{"line":1,"column":15}}},"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":15}}},"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":15}}},"consequent":{"type":"ExpressionStatement","expression":{"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"x","loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":1}}},"right":{"type":"Literal","value":6,"raw":"6","loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":3}}},"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":3}}},"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":4}}},"alternate":null,"loc":{"start":{"line":1,"column":0},"end":{"line":2,"column":4}}}],"sourceType":"script","loc":{"start":{"line":1,"column":0},"end":{"line":2,"column":4}}}'
        );
    });
});
