import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateConversationRequest } from '../dto/requests/create-conversation.request.js';
import { EntityNotFoundException } from '../../../app/exceptions/EntityNotFoundException.js';
import { CreateConversationResponse } from '../dto/responses/create-conversation.response.js';
import { GetConversationResponse } from '../dto/responses/get-conversation.response.js';
import { ApiError } from '../../../utils/types/enums/api-error.enum.js';
import { ParseIdPipe } from '../../../app/pipes/parse-id.pipe.js';
import { ConversationsService } from '../services/conversations.service.js';
import type { CreateMessageRequest } from '../dto/requests/create-message.request.js';

@Controller('conversations')
export class ConversationsController {
  public constructor(
    private readonly conversationsService: ConversationsService,
  ) {}

  @Post()
  public async create(
    @Body() dto: CreateConversationRequest,
  ): Promise<CreateConversationResponse> {
    return new CreateConversationResponse(
      await this.conversationsService.createConversation(dto),
    );
  }

  @Get(':id')
  public async getConversation(
    @Param('id', new ParseIdPipe()) id: string,
  ): Promise<GetConversationResponse> {
    try {
      return new GetConversationResponse(
        await this.conversationsService.getConversation(id),
      );
    } catch (exception: unknown) {
      if (exception instanceof EntityNotFoundException)
        throw new NotFoundException(ApiError.CONVERSATION_NOT_FOUND);

      throw exception;
    }
  }

  @Post(':id/messages')
  public async addMessage(
    @Param('id', new ParseIdPipe()) id: string,
    @Body() dto: CreateMessageRequest,
  ): Promise<GetConversationResponse> {
    try {
      return new GetConversationResponse(
        await this.conversationsService.createMessage(id, dto),
      );
    } catch (exception: unknown) {
      if (exception instanceof EntityNotFoundException)
        throw new NotFoundException(ApiError.CONVERSATION_NOT_FOUND);

      throw exception;
    }
  }
}
