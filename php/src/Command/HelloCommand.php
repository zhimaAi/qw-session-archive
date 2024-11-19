<?php
// Copyright © 2016- 2024 Sesame Network Technology all right reserved

declare(strict_types=1);

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Yiisoft\Yii\Console\ExitCode;

#[AsCommand(name: 'hello', description: 'An example command', hidden: false)]
final class HelloCommand extends Command
{
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Hello22, ');
        sleep(5);
        $output->writeln("World!");

        return ExitCode::OK;
    }
}