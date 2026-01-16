#!/bin/bash
cd /home/kavia/workspace/code-generation/confident-clarity-portfolio-229905-229914/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

