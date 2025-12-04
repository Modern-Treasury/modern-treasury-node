// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { ModernTreasury } from 'modern-treasury';

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { ModernTreasury } from "modern-treasury";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: ModernTreasury)`
    : `const run: (${functionSource.client}: ModernTreasury) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: tsLine } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    // We add two lines in the beginning, for the client import and the function declaration.
    // So the actual (zero-based) line number is tsLine - 2.
    const lineNumber = tsLine - 2;
    const line = code.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    at line ${lineNumber + 1}\n      ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.ping',
    'client.connections.list',
    'client.counterparties.collectAccount',
    'client.counterparties.create',
    'client.counterparties.delete',
    'client.counterparties.list',
    'client.counterparties.retrieve',
    'client.counterparties.update',
    'client.events.list',
    'client.events.retrieve',
    'client.expectedPayments.create',
    'client.expectedPayments.delete',
    'client.expectedPayments.list',
    'client.expectedPayments.retrieve',
    'client.expectedPayments.update',
    'client.externalAccounts.completeVerification',
    'client.externalAccounts.create',
    'client.externalAccounts.delete',
    'client.externalAccounts.list',
    'client.externalAccounts.retrieve',
    'client.externalAccounts.update',
    'client.externalAccounts.verify',
    'client.incomingPaymentDetails.createAsync',
    'client.incomingPaymentDetails.list',
    'client.incomingPaymentDetails.retrieve',
    'client.incomingPaymentDetails.update',
    'client.invoices.addPaymentOrder',
    'client.invoices.create',
    'client.invoices.list',
    'client.invoices.retrieve',
    'client.invoices.update',
    'client.invoices.lineItems.create',
    'client.invoices.lineItems.delete',
    'client.invoices.lineItems.list',
    'client.invoices.lineItems.retrieve',
    'client.invoices.lineItems.update',
    'client.documents.create',
    'client.documents.list',
    'client.documents.retrieve',
    'client.accountCollectionFlows.create',
    'client.accountCollectionFlows.list',
    'client.accountCollectionFlows.retrieve',
    'client.accountCollectionFlows.update',
    'client.accountDetails.create',
    'client.accountDetails.delete',
    'client.accountDetails.list',
    'client.accountDetails.retrieve',
    'client.routingDetails.create',
    'client.routingDetails.delete',
    'client.routingDetails.list',
    'client.routingDetails.retrieve',
    'client.internalAccounts.create',
    'client.internalAccounts.list',
    'client.internalAccounts.requestClosure',
    'client.internalAccounts.retrieve',
    'client.internalAccounts.update',
    'client.internalAccounts.updateAccountCapability',
    'client.internalAccounts.balanceReports.create',
    'client.internalAccounts.balanceReports.delete',
    'client.internalAccounts.balanceReports.list',
    'client.internalAccounts.balanceReports.retrieve',
    'client.ledgers.create',
    'client.ledgers.delete',
    'client.ledgers.list',
    'client.ledgers.retrieve',
    'client.ledgers.update',
    'client.ledgerAccountCategories.addLedgerAccount',
    'client.ledgerAccountCategories.addNestedCategory',
    'client.ledgerAccountCategories.create',
    'client.ledgerAccountCategories.delete',
    'client.ledgerAccountCategories.list',
    'client.ledgerAccountCategories.removeLedgerAccount',
    'client.ledgerAccountCategories.removeNestedCategory',
    'client.ledgerAccountCategories.retrieve',
    'client.ledgerAccountCategories.update',
    'client.ledgerAccounts.create',
    'client.ledgerAccounts.delete',
    'client.ledgerAccounts.list',
    'client.ledgerAccounts.retrieve',
    'client.ledgerAccounts.update',
    'client.ledgerAccountBalanceMonitors.create',
    'client.ledgerAccountBalanceMonitors.delete',
    'client.ledgerAccountBalanceMonitors.list',
    'client.ledgerAccountBalanceMonitors.retrieve',
    'client.ledgerAccountBalanceMonitors.update',
    'client.ledgerAccountStatements.create',
    'client.ledgerAccountStatements.retrieve',
    'client.ledgerEntries.list',
    'client.ledgerEntries.retrieve',
    'client.ledgerEntries.update',
    'client.ledgerTransactions.create',
    'client.ledgerTransactions.createPartialPost',
    'client.ledgerTransactions.createReversal',
    'client.ledgerTransactions.list',
    'client.ledgerTransactions.retrieve',
    'client.ledgerTransactions.update',
    'client.ledgerTransactions.versions.list',
    'client.lineItems.list',
    'client.lineItems.retrieve',
    'client.lineItems.update',
    'client.paymentFlows.create',
    'client.paymentFlows.list',
    'client.paymentFlows.retrieve',
    'client.paymentFlows.update',
    'client.paymentOrders.create',
    'client.paymentOrders.createAsync',
    'client.paymentOrders.list',
    'client.paymentOrders.retrieve',
    'client.paymentOrders.update',
    'client.paymentOrders.reversals.create',
    'client.paymentOrders.reversals.list',
    'client.paymentOrders.reversals.retrieve',
    'client.paymentReferences.list',
    'client.paymentReferences.retireve',
    'client.paymentReferences.retrieve',
    'client.returns.create',
    'client.returns.list',
    'client.returns.retrieve',
    'client.transactions.create',
    'client.transactions.delete',
    'client.transactions.list',
    'client.transactions.retrieve',
    'client.transactions.update',
    'client.transactions.lineItems.create',
    'client.transactions.lineItems.delete',
    'client.transactions.lineItems.list',
    'client.transactions.lineItems.retrieve',
    'client.validations.validateRoutingNumber',
    'client.virtualAccounts.create',
    'client.virtualAccounts.delete',
    'client.virtualAccounts.list',
    'client.virtualAccounts.retrieve',
    'client.virtualAccounts.update',
    'client.bulkRequests.create',
    'client.bulkRequests.list',
    'client.bulkRequests.retrieve',
    'client.bulkResults.list',
    'client.bulkResults.retrieve',
    'client.ledgerAccountSettlements.create',
    'client.ledgerAccountSettlements.list',
    'client.ledgerAccountSettlements.retrieve',
    'client.ledgerAccountSettlements.update',
    'client.ledgerAccountSettlements.accountEntries.delete',
    'client.ledgerAccountSettlements.accountEntries.update',
    'client.foreignExchangeQuotes.create',
    'client.foreignExchangeQuotes.list',
    'client.foreignExchangeQuotes.retrieve',
    'client.connectionLegalEntities.create',
    'client.connectionLegalEntities.list',
    'client.connectionLegalEntities.retrieve',
    'client.connectionLegalEntities.update',
    'client.legalEntities.create',
    'client.legalEntities.list',
    'client.legalEntities.retrieve',
    'client.legalEntities.update',
    'client.legalEntityAssociations.create',
    'client.paymentActions.create',
    'client.paymentActions.list',
    'client.paymentActions.retrieve',
    'client.paymentActions.update',
    'client.journalEntries.list',
    'client.journalEntries.retrieve',
    'client.journalReports.list',
    'client.journalReports.retrieve',
    'client.journalReports.update',
    'client.holds.create',
    'client.holds.list',
    'client.holds.retrieve',
    'client.holds.update',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        message: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        message: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new ModernTreasury({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
        logLines,
        errLines,
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
